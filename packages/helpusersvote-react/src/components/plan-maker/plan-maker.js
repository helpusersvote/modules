import React, { Component } from 'react'
import * as AWS from 'aws-sdk';
import Button from '../polling-place-finder/stateless/button'

import Step1 from './stateless/steps/step-1'
import Step2 from './stateless/steps/step-2'
import Done from './stateless/steps/done'

const steps = [
  { title: `How're you planning to get there?`, component: Step1 },
  { title: 'What time are you planning to go?', component: Step2 }
]

const doneStep = {
  title: `You're ready to vote!`,
  component: Done
}

// Initialize Amazon Cognito
const region = 'us-east-1';
AWS.config.region = region;
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    IdentityPoolId: region + ':349a4488-ffe3-415b-baeb-224c6f6ac3d4',
});

export class PlanMaker extends Component {
  render() {
    const {
      email,
      emailSubmitted,
      phone,
      phoneSubmitted,
      stepIndex,
      stepValues
    } = this.state
    const step = steps[stepIndex] || doneStep

    const StepComponent = step.component

    return (
      <div className="outdent plan-maker mb3">
        <div className="heading-container flex justify-between">
          <h1 className="heading">{step.title}</h1>
          {stepIndex < steps.length && (
            <span className="gray f6" style={{ lineHeight: '23px' }}>
              Step {stepIndex + 1} of 2
            </span>
          )}
        </div>
        <div className="plan-maker-content">
          <StepComponent
            values={stepValues}
            onSelect={this.onStepSelect(stepIndex)}
          />
        </div>
        <div className="footer-container">
          <div className="directions-label">Want a reminder in your email?</div>
          {emailSubmitted ? (
            <div>
              Awesome! We&rsquo;ll remind you at{' '}
              <strong>{emailSubmitted}</strong>.
            </div>
          ) : (
            <form
              onSubmit={this.onReminderSubmit('email')}
              className="flex justify-between"
            >
              <input
                required
                type="email"
                value={email}
                placeholder="Email address"
                onChange={this.onInputChange('email')}
                className="mw-100 w-100 f5 input-reset ba b--black-20 pa2 border-box br1"
              />
              <Button classes="ml2" style={{ height: 36 }}>
                Remind
              </Button>
            </form>
          )}
          <div className="directions-label mt3">Or on your phone?</div>
          {phoneSubmitted ? (
            <div>
              Great! You&rsquo;ll get a text at{' '}
              <strong>{phoneSubmitted}</strong>.
            </div>
          ) : (
            <form
              onSubmit={this.onReminderSubmit('phone')}
              className="flex justify-between"
            >
              <input
                required
                type="tel"
                value={phone}
                placeholder="Phone number"
                onChange={this.onInputChange('phone')}
                className="mw-100 w-100 f5 input-reset ba b--black-20 pa2 border-box br1"
              />
              <Button classes="ml2" style={{ height: 36 }}>
                Remind
              </Button>
            </form>
          )}
        </div>
      </div>
    )
  }

  state = {
    stepIndex: 0,
    stepValues: [],
    email: '',
    phone: ''
  }

  onInputChange = key => e =>
    this.setState({ [key]: e.target ? e.target.value : e })

  onReminderSubmit = key => e => {
    // prevent form submission
    e.preventDefault()
    e.stopPropagation()

    //retrieve the polling place location and send message
    if(window && window.pollingPlaces){
      var lambdaParams = getLambdaParams(key, this.state[key]);
      var lambda = new AWS.Lambda({region: region, apiVersion: '2015-03-31'});

      lambda.invoke(lambdaParams, function(error, data) {
        if (error) {
          console.log(error)
        } else {
          console.log(data.Payload)
        }
      });
    }

    const { [key]: value } = this.state

    this.setState({
      [key + 'Submitted']: value
    })
  }

  onStepSelect = index => value => {
    const { stepValues: oldValues } = this.state
    // create new stepValues array
    const stepValues = [...oldValues]

    stepValues[index] = value

    this.setState({ stepValues, stepIndex: index + 1 })
  }
}

/**
 * Retrieve the needed params to send to Lambda
 *
 * @param {String}
 * @return {Object}
 */
function getLambdaParams(key, value) { 
  let pollLocation = window.pollingPlaces;

  return {
    FunctionName : key == "phone" ? 'sendTextMessage' : 'sendPollingPlaceMessage',
    InvocationType : 'RequestResponse',
    LogType : 'None',
    Payload : JSON.stringify({
      method: key,
      value: key == "phone" ? value.replace(/[^0-9]/gi, '') : value,
      pollLocation: pollLocation.address.locationName,
      body: createMessageBody(key)
    })
  };
}

/**
 * Create the message body needed for Lambda functions
 *
 * @param {String}
 * @return {String}
 */
function createMessageBody(key) { 
  //initialize the parameters
  let pollLocation = window.pollingPlaces;
  let directions = window.directionsURL;

  switch(key) {
    case "phone":
        var response = 'Hi, this is Vote.org!\r\n\r\n';
        response += `Here is your friendly reminder to vote on Election Day (November 6th) at ${pollLocation.address.locationName}.\r\n\r\n`;
        response += `Below is the address which provides directions to get there!\r\n\r\n${pollLocation.address.text}`;
        return response;
    default:
        return `Hi, this is Vote.org!<br><br>
        Here is your friendly reminder to vote on Election Day (November 6th) at ${pollLocation.address.locationName}.<br>
        Below is the address and a link for directions to get there!<br><br>
        ${pollLocation.address.text}<br>
        <a href='${directions}' target='_blank'>Get Directions</a>`
  }
}


export default PlanMaker

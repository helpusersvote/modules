import React from 'react'
import AddToCalendar from 'react-add-to-calendar';

export function Done({ values }) {
  const [transport, time] = values

  let calendarIcon = { 'calendar-plus-o': 'left' };
  let calendarItems = [
    { google: 'Google' },
    { outlook: 'Outlook' },
    { apple: 'Apple Cal' },
    { yahoo: 'Yahoo' }
  ];
  let calendarEvent = {
    title: 'Ready to vote!',
    description: 'This is a reminder to head over to the polling place and place your vote!',
    location: window && window.pollingPlaces ? window.pollingPlaces.address.text : '',
    startTime: '2018-11-06',
    endTime: '2018-11-07'
  };

  return (
    <div>
      <div>
        We can remind you to {transport} to your polling place in the {time} on
        Election Day.
        <br />
        <br />
        Just leave your email or phone number below.
        <br />
        <br />
        You can also sign up for {' '} 
        <a className="link blue underline-hover pointer" href="https://www.vote.org/election-reminders/" target="_blank">
          election reminders
        </a>
        .
      </div>
      {/*
      <h2>TODO</h2>
      <ul>
        <li>Improve sentence version of options</li>
        <li>Show add to calendar button</li>
      </ul>
      */}
      <br />
      <br />
      <div className="add-to-calendar huv-button huv-button--blue"><AddToCalendar event={calendarEvent} buttonTemplate={calendarIcon} listItems={calendarItems} /></div>
    </div>
  )
}

export default Done

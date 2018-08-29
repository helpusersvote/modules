<h1>
  Help Users Vote Modules <a href="https://travis-ci.org/helpusersvote/modules"><img src="https://travis-ci.org/helpusersvote/modules.svg?branch=master" /></a>
</h1>

[Help Users Vote](https://helpusersvote.com) makes it easy for companies to help their users vote.

This is our monorepo of [npm](https://npmjs.com) modules to use in your application:

**Framework-specific Components**

- [@helpusersvote/react](https://github.com/helpusersvote/modules/tree/master/packages/helpusersvote-react) with [Storybook →](https://storybook.helpusersvote.com)

**Native JavaScript Functions**

- [@helpusersvote/election-logic](https://github.com/helpusersvote/modules/tree/master/packages/helpusersvote-election-logic)
- [@helpusersvote/election-copy](https://github.com/helpusersvote/modules/tree/master/packages/helpusersvote-election-copy)

## Usage

If you want to add a banner to your React app, install the library:

```
npm i -S @helpusersvote/react
```

Then in your application code:

```javascript
import { Banner } from '@helpusersvote/react'
import Home from '../components/home'

const HomePage = props => (
  <Home>
    <Banner ctaColor="red">
  </Home>
)

export default HomePage
```

### Dynamic Configuration in React

To dynamically configure CTAs, use the `SmartCTA` component which pulls config from `cdn.helpusersvote.com`:

```javascript
import { SmartCTA } from '@helpusersvote/react'
import Home from '../components/home'

// namespaceId = partner id for your team
// id = lookup key for call-to-action, e.g. where it's rendered
const HomePage = props => (
  <Home>
    <SmartCTA namespaceId="<partner-id>" id="home-page">
  </Home>
)

export default HomePage
```

We don't set any cookies on these requests — this is a configuration CDN to check if a banner versus a popup should be rendered or if the link should be purple versus pink.

### Javascript-only

If you just want to check if there should be a call-to-action and place nonpartisan copy with an existing component, install our JavaScript libraries:

```bash
npm install --save @helpusersvote/election-logic @helpusersvote/election-copy
```

Then in your application (client-side or server-side):

```javascript
const { shouldShowCTA } = require('@helpusersvote/election-logic')
const { getElectionText } = require('@helpusersvote/election-copy')

module.exports = function getHome(req, res) {
  const { titleText, ctaText, ctaHref } = getElectionText({
    type: 'countdown'
  })

  return res.render('index', {
    electionCTA: shouldShowCTA() ? {
      // Election day is in 3 days!
      titleText,
      // Get ready to vote
      ctaText,
      // https://vote.org
      ctaHref
    } : {}
  }) 
}
```

## License

All modules are open-sourced under the [MIT License](https://github.com/helpusersvote/modules/blob/master/license)
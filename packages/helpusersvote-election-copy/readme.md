# @helpusersvote/election-copy

JavaScript functions to render election-related CTAs

## Installation

First, add the module to your codebase:

```bash
npm install --save @helpusersvote/election-copy
```

## Usage

In your app, import functions and text from the `@helpusersvote/election-copy` module:

```javascript
import { getElectionText, electionCopy } from '@helpusersvote/election-copy'

// Pass in optional configuration to `getElectionText()`

const {
  // Election day is in 3 days!
  titleText,
  // Get ready to vote
  ctaText,
  // https://vote.org
  ctaHref
} = getElectionText({ type: 'countdown' })

// Or get the static text directly with `electionCopy`

const {
  text: {
    registration: {
      // Get ready to vote in 2018!
      title: titleText,
      // Check if you're registered today
      cta: ctaText
    }
  }
} = electionCopy
```

## License

All modules are open-sourced under the [MIT License](https://github.com/helpusersvote/modules/blob/master/license)
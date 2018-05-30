# @helpusersvote/react

React components to help your users vote

## Installation

First, add these components to your codebase:

```bash
npm install --save @helpusersvote/react
```

## Usage

In your app, import components from the `@helpusersvote/react` module to add them to a page:

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

If you want to use dynamic configuration, use the `SmartCTA` component, which will pull config from `api.helpusersvote.com`:

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

## License

All modules are open-sourced under the [MIT License](https://github.com/helpusersvote/modules/blob/master/license)
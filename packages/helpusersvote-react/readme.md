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
    <Banner ctaColor="red" />
  </Home>
)

export default HomePage
```

If you want to add tracking to your call-to-action, add your namespace and campaign:

```javascript
import { Banner } from '@helpusersvote/react'
import Home from '../components/home'

const HomePage = props => (
  <Home>
    <Banner namespace="example.com" campaign="home-page" />
  </Home>
)

// Which is the same as doing
const HomePage = props => (
  <Home>
    <Banner ctaHref="https://go.helpusersvote.com/v1/example.com/home-page" />
  </Home>
)

export default HomePage
```

If you want to only show the banner on special days, use the `ShouldShowCTA` component:

```javascript
import { ShouldShowCTA, Banner } from '@helpusersvote/react'
import Home from '../components/home'

// namespaceId = partner id for your team
// id = lookup key for call-to-action, e.g. where it's rendered
const HomePage = props => (
  <Home>
    <ShouldShowCTA>
      <Banner namespace="example.com" campaign="home-page">
    </ShouldShowCTA>
  </Home>
)

export default HomePage
```

## License

All modules are open-sourced under the [MIT License](https://github.com/helpusersvote/modules/blob/master/license)

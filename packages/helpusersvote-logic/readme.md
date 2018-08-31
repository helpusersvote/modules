# @helpusersvote/logic

JavaScript functions to check if a call-to-action should be rendered

## Installation

First, add the module to your codebase:

```bash
npm install --save @helpusersvote/logic
```

## Usage

In your app, import functions from the `@helpusersvote/logic` module:

```javascript
import { shouldShowCTA } from '@helpusersvote/logic'

// Optional `regions` configuration, defaults to USA
const regions = [
  'city:San Francisco',
  'state:California',
  'country:USA'
]

// wherever you want to render the call-to-action
if (shouldShowCTA({ regions })) {
  // render a custom banner or use `@helpuservote/copy`
}
```

## License

All modules are open-sourced under the [MIT License](https://github.com/helpusersvote/modules/blob/master/license)
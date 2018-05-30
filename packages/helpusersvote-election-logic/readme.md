# @helpusersvote/election-logic

JavaScript functions to check if a call-to-action should be rendered

## Installation

First, add the module to your codebase:

```bash
npm install --save @helpusersvote/election-logic
```

## Usage

In your app, import functions from the `@helpusersvote/election-logic` module:

```javascript
import { shouldShowCTA } from '@helpusersvote/election-logic'

// wherever you want to render the call-to-action
if (shouldShowCTA()) {
  // render a custom banner or use `@helpuservote/election-copy`
}
```

## License

All modules are open-sourced under the [MIT License](https://github.com/helpusersvote/modules/blob/master/license)
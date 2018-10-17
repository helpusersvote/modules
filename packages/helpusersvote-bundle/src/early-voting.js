var React = require('react')
var ReactDOM = require('react-dom')
var { PollingPlaceFinder } = require('@helpusersvote/react')

var root = document.getElementById('huv-root')

function render() {
  ReactDOM.render(
    React.createElement('div', null, [
      React.createElement(PollingPlaceFinder, { key: 1, type: 'early' }),
      React.createElement(PollingPlaceFinder.Styles, { key: 2 })
    ]),
    root
  )
}

if (!root) {
  console.error('🇺🇸 · No `#huv-root` element found')
} else {
  render()
}

window.HUV = { render }

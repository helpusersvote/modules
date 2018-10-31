var React = require('react')
var ReactDOM = require('react-dom')
var { Ballot, PollingPlaceFinder } = require('@helpusersvote/react')

var root = document.getElementById('huv-root')

function render() {
  ReactDOM.render(
    React.createElement('div', null, [
      React.createElement(Ballot, { key: 1 }),
      React.createElement(PollingPlaceFinder.Styles, { key: 2 }),
      React.createElement(Ballot.Styles, { key: 5 })
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

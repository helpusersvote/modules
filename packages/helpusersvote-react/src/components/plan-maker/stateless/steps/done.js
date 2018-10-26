import React from 'react'

export function Done({ values }) {
  const [transport, time] = values

  return (
    <div>
      <div>
        Don&rsquo;t forget to {transport} in the {time} on Election Day. You can
        add a reminder to your calendar or we can text/email you below:
      </div>
      {/*
      <h2>TODO</h2>
      <ul>
        <li>Improve sentence version of options</li>
        <li>Show add to calendar button</li>
      </ul>
      */}
    </div>
  )
}

export default Done

import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobsOptions, text, number, boolean } from '@storybook/addon-knobs'
import { withNotes } from '@storybook/addon-notes'
import Banner from '../src/components/banner'
import Modal from '../src/components/modal'

const withKnobs = withKnobsOptions({ escapeHTML: false })

const knobForType = prop => {
  switch (typeof prop) {
    case 'number':
      return number
    case 'boolean':
      return () => {}
    case 'string':
    default:
      return text
  }
}
const toValue = val => (typeof val === 'string' ? `"${val}"` : `{${val}}`)
const propsToKnobs = props =>
  Object.keys(props)
    .map(prop => ({
      prop,
      knob: knobForType(props[prop])(prop, props[prop])
    }))
    .reduce((newProps, { prop, knob }) => {
      newProps[prop] = knob
      return newProps
    })
const renderDefaultProps = props =>
  Object.keys(props)
    .map(key => {
      return `  ${key}=${toValue(props[key])}`
    })
    .join('\n')

const MdCode = children => '```' + children + '```'
const renderNotes = ({ name, defaultProps }) => `
# Installation

You can easily install this module with npm:

${MdCode(`$ npm install --save @helpusersvote/react`)}

If you just want this component, you can import it with:

${MdCode(`import { ${name} } from '@helpusersvote/react`)}

# Example

${MdCode(`
<${name}
${renderDefaultProps(defaultProps)}
/>`)}
`

const bannerOptions = {
  notes: {
    markdown: renderNotes({
      defaultProps: Banner.defaultProps,
      name: 'Banner',
      pkg: 'banner'
    })
  }
}

storiesOf('Banner', module)
  .addDecorator(withKnobs)
  .addDecorator(withNotes)
  .add(
    'Default Banner',
    () => {
      const props = propsToKnobs(Banner.defaultProps)

      return <Banner {...props} />
    },
    bannerOptions
  )
  .add(
    'Custom Call-to-Action',
    () => {
      const props = propsToKnobs({
        ...Banner.defaultProps,
        ctaText: 'Register in 2 minutes'
      })

      return <Banner {...props} />
    },
    bannerOptions
  )

storiesOf('Modal', module)
  .addDecorator(withKnobs)
  .addDecorator(withNotes)
  .add('Default Modal', () => <Modal />)
  .add('Company Logo', () => {
    const domain = text('Company Domain', 'segment.com')

    return (
      <Modal
        logoProps={{
          logoUrl: `https://logo.clearbit.com/${domain}`
        }}
      />
    )
  })

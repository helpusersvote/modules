import './storybook.css'
import * as react from '@storybook/react'
import { setOptions } from '@storybook/addon-options'

setOptions({
  name: 'Help Users Vote',
  url: 'https://helpusersvote.com/add/website',
  downPanelInRight: true
})

const loadStories = () => require('../index')

react.configure(loadStories, module)

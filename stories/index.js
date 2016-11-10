import React from 'react'
import { storiesOf, action, linkTo } from '@kadira/storybook'
import paper from './paper'
import button from './button'

storiesOf('Demo', module)
  .add('Paper', paper)
  .add('button', button)

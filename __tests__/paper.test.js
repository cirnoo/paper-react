'use strict'

import React from 'react'
import {shallow} from 'enzyme'
import {Paper} from 'paper-react'
const DefinePaper = Paper('div')
const InitPaper = Paper('div', {stlye: {backgroundColor: '#000'}})


it('to be defined', ()=> {
  const paper = shallow(
    <DefinePaper/>
  )
  expect(paper).toBeDefined()
})

it('can use parameter to initializes the component', () => {
  const paper = shallow(
    <DefinePaper />
  )
  expect(paper).toBeDefined()
})

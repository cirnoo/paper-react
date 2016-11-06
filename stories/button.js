import React from 'react'
import {Paper} from 'paper-react'

const View = Paper('div',{style:{display: 'flex', justifyContent:'space-around'}})
const Button = Paper('button')
const ButtonWithBackground = Paper('button', {style:{backgroundColor:'red'}})

const view = {
  green: {
    style: {backgroundColor: 'green'}
  },
  'say-hello': {
    onClick: () => {alert('hello')}
  }
}


export default () => (
  <View childProps={view}>

    <Button>
      init button
    </Button>

    <ButtonWithBackground>
      i am red
    </ButtonWithBackground>

    <ButtonWithBackground state="green">
      overwrite red, i am blue
    </ButtonWithBackground>

    <Button state="say-hello">
      click me
    </Button>
  </View>
)

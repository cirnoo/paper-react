# Paper-React
The experimental UI components, to help us better maintenance and extension of the component.


## install

```
$ yarn install paper-react
```

# Usage

```js
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

//render
<View childProps={view}>

  <Button>
    init button
  </Button>

  //add init style
  <ButtonWithBackground>
    i am red
  </ButtonWithBackground>

  //overwrite style
  <ButtonWithBackground state="green">
    overwrite red, i am blue
  </ButtonWithBackground>

  //add event
  <Button state="say-hello">
    click me
  </Button>
</View>


```


## Demo
- https://github.com/ncysatnaf/paper-react/blob/master/stories


## license

MIT. Copyright (c) [viii](https://github.com/ncysatnaf).

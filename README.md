# Paper-React

## install

```
$ yarn install paper-react
```

## Demo

```js
import {Paper} from 'paper-react'

const View = Paper('div')
const FlexBox = Paper('div')
const Item = Paper('button')
const Divider = Paper('div', { style:{height: '1', margin: '10px 0', backgroundColor: 'rgb(223, 223, 223)'} })

const paper = {
  Column:{
    style:{display: 'flex', flex: 1, flexDirection: 'column'},
  },
  SpaceBetween: {
    style:{display: 'flex', flex: 1, justifyContent: 'space-between'}
  },
  SpaceAround: {
    style:{display: 'flex', flex: 1, justifyContent: 'space-around'}
  },
  Center: {
    style:{display: 'flex', flex: 1, justifyContent: 'center'}
  }
}

const item = {
  start: {
    style: {alignSelf: 'flex-start'}
  },
  center: {
    style: {alignSelf: 'center'}
  },
  end:{
    style: {alignSelf: 'flex-end'}
  },
}


const Demo = ({}) => (
    <View childProps={paper}>
      <FlexBox state="Column" childProps={item}>
        <Item state="start">😄</Item>
        <Item state="center">😄</Item>
        <Item state="end">😄</Item>
      </FlexBox>
      <Divider />
      <FlexBox state="Column" childProps={item}>
        <Item state="center">😄</Item>
        <Item state="center">😄</Item>
        <Item state="center">😄</Item>
      </FlexBox>
      <Divider />
      <FlexBox state="Column" childProps={item}>
        <Item state="end">😄</Item>
        <Item state="center">😄</Item>
        <Item state="start">😄</Item>
      </FlexBox>
      <Divider />
      <FlexBox state="SpaceBetween">
        <Item>😄</Item>
        <Item>😄</Item>
        <Item>😄</Item>
      </FlexBox>
      <Divider />
      <FlexBox state="SpaceAround">
        <Item>😄</Item>
        <Item>😄</Item>
        <Item>😄</Item>
      </FlexBox>
      <Divider />
      <FlexBox state="Center">
        <Item>😄</Item>
        <Item>😄</Item>
        <Item>😄</Item>
      </FlexBox>
    </View>
  )

```

## license

MIT. Copyright (c) [viii](https://github.com/ncysatnaf).

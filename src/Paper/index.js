import React, {PropTypes, Component} from 'react'

export default (element, init={style:{}}) => class Paper extends Component {
  static PropTypes = {
    state: PropTypes.string,
    children: PropTypes.node,
    childProps: PropTypes.object,
  }

  static defaultProps = {
    childProps: {},
    props: {},
  }

  getProps = () => {
    const {state, props} = this.props
    const {style, ...others} = props[state] || {}
    return {
      style: style ? {...init['style'], ...style} : init['style'],
      ...others
    }
  }

  setChildProps = (state) => {
    const {childProps} = this.props
    return {
      props:{
        [state] : childProps[state] || {}
      }
    }
  }

  constructor(props) {
    super(props)
  }
  render() {
    const { style, state, props } = this.props
    const children = Array.isArray(this.props.children) ? this.props.children : [this.props.children]

    return React.createElement(element, props && {...init, ...this.getProps()}, children.length > 0 && React.Children.map(children, child => {
      if(React.isValidElement(child)){
        return React.cloneElement(child, (child.props.state && this.props.childProps)? {...this.setChildProps(child.props.state)} : child.props )
      }else{
        return child
      }
    }))
  }
}

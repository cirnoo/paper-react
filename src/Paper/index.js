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
    const {childProps, props} = this.props
    if(childProps[state]){
      return {
        props:{
          [state] : childProps[state] || {}
        }
      }
    }
  }

  constructor(props) {
    super(props)
  }
  render() {
    if(this.props.render){
      this.props.render(this.props)
    }

    const { style, state, props } = this.props
    const children = Array.isArray(this.props.children) ? this.props.children : [this.props.children]
    return React.createElement(element, {...init, ...this.getProps()}, children.length > 0 && React.Children.map(children, child => {
      if(React.isValidElement(child)){
        return (child.props.state && this.props.childProps) ? React.cloneElement(child, {...this.setChildProps(child.props.state)}) : React.cloneElement(child)
      }else{
        return child
      }
    }))
  }
}

import React, {PropTypes, Component, Children} from 'react'

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
    const {state} = this.props
    const {style, ...others} = this.props[state] || {}
    return {
      style: style ? {...init['style'], ...style} : init['style'],
      ...others
    }
  }

  setChildProps = (state) => {
    const {childProps} = this.props
    if(childProps[state]){
      return {
        [state] : childProps[state] || {}
      }
    }
  }

  render() {
    if(this.props.render){
      this.props.render(this.props)
    }

    const { style, state } = this.props
    const children = Children.toArray(this.props.children)

    return React.createElement(element, {...init, ...this.getProps()}, children.length > 0 && React.Children.map(children, child => {
      if(React.isValidElement(child)){
        return (child.props.state && this.props.childProps) ? React.cloneElement(child, {...this.setChildProps(child.props.state)}) : React.cloneElement(child)
      }else{
        return child
      }
    }))
  }
}

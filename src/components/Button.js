import React from 'react'

class Button extends React.Component {
  render() {
    console.log(this)

    return (
      <button onClick={this.props.onClick}>
        {this.props.label}
      </button>
    )
  }
}

export default Button
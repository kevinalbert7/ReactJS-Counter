import React from "react"

class Counter extends React.Component {
    constructor () {
        super () 

    }
    render () {
        return (
            <div>
                 <h2>{this.props.count}</h2>
                <button onClick={this.props.handlePlusClick}>+</button>
                <button onClick={this.props.handleMinusClick}>-</button>
            </div>
        )
    }
}

export default Counter

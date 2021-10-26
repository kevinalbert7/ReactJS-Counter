import React from "react"

class Counter extends React.Component {
    constructor () {
        super () 

    }
    render () {
        return (
            <div>
                <h2>{this.props.count}</h2>
                <button onClick={this.props.increment}>+</button>
                <button onClick={this.props.substract}>-</button>
            </div>
        )
    }
}

export default Counter

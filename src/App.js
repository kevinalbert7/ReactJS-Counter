import logo from './logo.svg';
import './App.css';
import React from 'react';
import { render } from 'react-dom';
import Counter from './components/Counter.js'


class App extends React.Component {
  constructor () {
    super ()
    
    this.state = {
      count: 0
    }
  }
  
  handlePlusClick = () => {
    this.setState({ increment: this.state.count + 1 })
    console.log(this.state)
  }
  
  handleMinusClick = () => {
    this.setState({ substract: this.state.count - 1 })
    console.log(this.state)
  }

  render() {
      console.log("render")
    return (
        <>
        <h1>Counter</h1>
        <Counter count={this.props.count}/>
        </>
    )
  }
}


export default App;

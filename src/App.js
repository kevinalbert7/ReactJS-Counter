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
    if( this.state.count < 100 ) {
    this.setState({ count: this.state.count + 1 })
    }
  }
  
  handleMinusClick = () => {
      if( this.state.count > 0 ) {
        this.setState({ count: this.state.count - 1 })
      }

  }

  render() {
    return (
        <>
        <h1>Counter</h1>
        <Counter count={this.state.count} increment={this.handlePlusClick} substract ={this.handleMinusClick}/>
        <Counter count={this.state.count} increment={this.handlePlusClick} substract ={this.handleMinusClick}/>
        </>
    )
  }
}


export default App;

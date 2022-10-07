import './App.css';
import React from 'react';
import FirstCounter from './components/Counter.js'
import SecondCounter from './components/Counter.js'

class App extends React.Component {
  constructor () {
    super ()
    
    this.state = {
      count1: 0,
      count2: 0
    }
  }

  handlePlusClick1 = () => {
    if (this.state.count1 < 100) {
      if (this.state.count1 < this.state.count2) {
        this.setState({ count1: this.state.count1 + 10 })
      } else {
        this.setState({ count1: this.state.count1 + 10, count2: this.state.count2 + 10 })
      }
    }
  }  
  
  handleMinusClick1 = () => {
    if (this.state.count1 > 0) {
      this.setState({ count1: this.state.count1 - 10 })
    }
  }

  handlePlusClick2 = () => {
    if (this.state.count2 < 100) {
      this.setState({ count2: this.state.count2 + 10 })
    }
  }

  handleMinusClick2 = () => {
    if (this.state.count1 > 0) {
      if (this.state.count1 < this.state.count2) {
        this.setState({ count2: this.state.count2 - 10 })
      } else {
        this.setState({ count1: this.state.count1 - 10, count2: this.state.count2 - 10 })
      }
    }
  }

  render() {
    return (
        <content>
          <h1>Counter</h1>
          <FirstCounter count={this.state.count1} increment={this.handlePlusClick1} substract={this.handleMinusClick1}/>
          <SecondCounter count={this.state.count2} increment={this.handlePlusClick2} substract={this.handleMinusClick2}/>
        </content>
    )
  }
}


export default App;

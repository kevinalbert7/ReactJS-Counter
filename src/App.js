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
    // count1 < 100

    if (this.state.count1 < 100 && this.state.count1 < this.state.count2) {
      this.setState({ count1: this.state.count1 +=10 })
    } else if (this.state.count1 === this.state.count2) {
      this.setState({ count1: this.state.count1 + 1, count2: this.state.count2 + 1 })
    }
  }
  
  handleMinusClick1 = () => {
    if (this.state.count1 > 0) {
      this.setState({ count1: this.state.count1 - 1 })
    }
  }

  handlePlusClick2 = () => {
    if (this.state.count2 < 100) {
      this.setState({ count2: this.state.count2 + 1 })
    }
  }

  handleMinusClick2 = () => {
    if (this.state.count1 > 0 && this.state.count1 < this.state.count2) {
      this.setState({ count2: this.state.count2 - 1 })
    } else if (this.state.count2 === this.state.count1) {
      this.setState({ count1: this.state.count1 - 1, count2: this.state.count2 - 1 })
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

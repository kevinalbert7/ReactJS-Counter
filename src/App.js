import logo from './logo.svg';
import './App.css';
import React from 'react';
import { render } from 'react-dom';


class App extends React.component {
  constructor () {
    super ()
    
    this.state = {
      count = 0
    }
  }
  
  handlePlusClick = () => {
    this.setState({ count: this.state.count: + 1 })
    console.log(this.state)
  }
  
  handleMinusClick = () => {
    this.setState({ count: this.state.count: - 1 })
    console.log(this.state)
  }

  render() {
    
    return ()
  }
}


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <h1>Counter</h1>
//         <h2>{this.state.count}</h2>
//         <button onClick={handlePlusClick}>+</button>
//         <button onClick={handleMinusClick}>-</button>
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

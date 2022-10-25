import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  onClick1() {
    console.log('UM!');
  }
  onClick2() {
    console.log('DOIS!');
  }
  onClick3()  {
    console.log('TRẼS!');
  }

render() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button type="button" onClick={ onClick1 }>Botão 1</button>
        <button type="button" onClick={ onClick2 }>Botão 2</button>
        <button type="button" onClick={ onClick3 }>Botão 3</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
}

export default App;

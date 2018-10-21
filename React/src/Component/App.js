import React, { Component } from 'react';
import '../App.css';
import TaskComponent from "./Tasks/TaskComponent";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">To Do Task</header>
        < TaskComponent/>
      </div>
    );
  }
}

export default App;

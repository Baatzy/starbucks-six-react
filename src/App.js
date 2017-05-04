import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: [
      'Learn Javascript',
      'Learn ES6',
      'Learn React'
      ],
      inputValue: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.addTodo = this.addTodo.bind(this)
  }

  handleChange(e) {
    console.log('called')
    this.setState({inputValue: e.target.value})
  }

  addTodo() {
    this.setState({
      todos: [...this.state.todos, 'Learn More!']
    })  
  }

  render() {
    return (
      <div className="App">
        <h1>Todo List</h1>
        <div>Input Value: {this.state.inputValue}</div>
        <ul>
          {this.state.todos.map(todo => <li>{todo}</li>)}
        </ul>
        <input value={this.inputValue} onChange={this.handleChange} />
        <button onClick={this.addTodo}>Add Todo</button>
      </div>
    );
  }
}

export default App;


import './App.css'
import { Component } from 'react'
// import Count from './components/count'

class App extends Component {
  constructor(props) {
    super(props)


    this.state = {
      name: "To do list",
      todos: [],
      inputValue: '',
      isEditting: false,
      currentIndex: null,

    }

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.handleEdit = this.handleEdit.bind(this)

  }


  handleInputChange(e) {
    this.setState((state) => ({
      ...state,
      inputValue: e.target.value
    }))
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.isEditting) {
      this.setState((state) => ({
        todos: state.todos.map((todo, index) =>
          index === state.currentIndex ? state.inputValue : todo

        ),
        inputValue: "",
        isEditting: false,
        currentIndex: null
      }));
    } else {
      this.setState((state) => ({
        todos: state.todos.concat(state.inputValue),
        inputValue: "",
      }));

    }

  }

  handleDelete(index) {
    this.setState((state) => ({
      todos: state.todos.filter((_, i) => i !== index),
      inputValue: ''
    }))

  }

  handleEdit(index) {
    this.setState((state) => ({
      inputValue: state.todos[index],
      currentIndex: index,
      isEditting: true,
    }))
  }
  moveUp(index) {
    if (index > 0) {
      this.setState((state) => ({
        todos: state.todos[index], state.todos[index + 1] = state.todos[index + 1], state.todos[index]
      }))
    }
  }




  render() {
    return (
      <section>
        <h3>{this.state.name}</h3>
        <form action="#" onSubmit={this.handleSubmit}>
          <label htmlFor="todoName" >Enter a task</label>
          <input
            type="text"
            value={this.state.inputValue}
            onChange={this.handleInputChange}
          />
          <button type="submit">{this.state.isEditting ? "Update" : "Submit"}</button>
        </form>
        <h4>All the tasks</h4>
        <ul>
          {this.state.todos.map((todo, index) => {
            return <div key={index}>
              <li >{todo}</li>
              <button onClick={() => { this.handleDelete(index) }}>Del</button>
              <button onClick={() => { this.handleEdit(index) }}>Edit</button>
              <button onClick={() => { this.moveUp(index) }}>move up</button>
            </div>
          })}
        </ul>
        <h4>{ }</h4>

      </section>
    )
  }
}



export default App

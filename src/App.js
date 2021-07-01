import './App.css';
import React, { useEffect } from 'react';
import TodoList from './Todo/TodoList';
import AddTodos from './Todo/AddTodos';
import Context from './context';

function App() {
  const [todos, setTodos] = React.useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=6')
      .then(response => response.json())
      .then(todos => {
        setTimeout(() => {
          setTodos(todos)
        }, 2000)
      })
  }, [])
  function toggleTodo(id){
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    }))
  }
  function removeTodo (id){
    setTodos(todos.filter(todo => todo.id !== id))
  }

  function addTodo(title) {
    setTodos(todos.concat([{
      title,
      id: Date.now(),
      completed: false
    }]))
  }
  return (
    <Context.Provider value={{ removeTodo }}>
      <div className="container">
        <h1>React Tutorial!</h1>
        <AddTodos onCreate={addTodo}/>
        {
          todos.length ? 
            <TodoList todos={todos} onToggle={toggleTodo}/> : 
            <p>No todos!</p>
        }
      </div>
    </Context.Provider>
  );
}

export default App;

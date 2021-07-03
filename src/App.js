import './App.css';
import React, { useEffect } from 'react';
import TodoList from './Todo/TodoList';
// import AddTodos from './Todo/AddTodos';
import Context from './context';
import Loader from './loader.js';
import Modal from './Modal/Modal.js';

const AddTodos = React.lazy(() => new Promise(resolve => {
  setTimeout(() => {
    resolve(import('./Todo/AddTodos.js'))
  }, 3000)
}))

function App() {
  const [todos, setTodos] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=6')
      .then(response => response.json())
      .then(todos => {
        setTimeout(() => {
          setTodos(todos)
          setLoading(false)
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
        <h1>React Todo App!</h1>
        <React.Suspense fallback="Loading...">
          <AddTodos onCreate={addTodo}/>
        </React.Suspense>
        {loading && <Loader />}
        {
          todos.length ? (
            <TodoList todos={todos} onToggle={toggleTodo}/> ) : 
            (loading ? null : <p>No todos!</p>)
        }
          <Modal />
      </div>
    </Context.Provider>
  );
}

export default App;

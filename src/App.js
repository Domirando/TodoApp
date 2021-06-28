import './App.css';
import React from 'react';
import TodoList from './Todo/TodoList';
import Context from './context';

function App() {
  const [todos, setTodos] = React.useState(
    [
    {id: 1, completed: false, title: 'Internship'},
    {id: 2, completed: false, title: 'Increase coding'},
    {id: 3, completed: false, title: 'Practice with coding'},
    {id: 4, completed: false, title: 'Housework activites'},
    {id: 5, completed: false, title: 'Look after to siblings'}, 
    {id: 6, completed: false, title: 'Teach siblings'} 
  ]
  );
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
  return (
    <Context.Provider value={{ removeTodo }}>
      <div className="container">
        <h1>Reat Tutorial!</h1>
        <TodoList todos={todos} onToggle={toggleTodo}/>
      </div>
    </Context.Provider>
  );
}

export default App;

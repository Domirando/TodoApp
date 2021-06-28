import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

const styles = {
  ul: {
    fontSize: 18,
    listStyle: 'none',
    padding: 0
  }
}

function TodoList(props) {
  return (
    <ul style={styles.ul}>
      {props.todos.map((todo, i) => {
        return <TodoItem todo={todo} key={todo.id} index={i} onChange={props.onToggle}/>
      })}
    </ul>
  );
}
TodoList.propTypes = {
  todos:  PropTypes.arrayOf(PropTypes.object).isRequired,
  onToggle: PropTypes.func.isRequired
}
export default TodoList;
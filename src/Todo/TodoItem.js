import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Context from '../context';


const styles = {
  li: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0.5rem 1rem',
    border: '1px solid #ccc',
    borderRadius: '4px',
    marginBottom: '1rem',
    width: '100%',
    height: '2rem'
  },
  input: {
    marginRight: '1rem'
  }
}

function TodoItem(props) {
  const { removeTodo } = useContext(Context)
  const classes = [];

  if(props.todo.completed){
    classes.push('done')
  }
  
  console.log(classes)

  return(
    <li style={styles.li}>
    <span className={classes.join(' ')}>
      <input checked={props.todo.completed} type="checkbox" style={styles.input} onChange={() => props.onChange(props.todo.id)} />
      <strong>
        {props.index+1})
        &nbsp;
      </strong>
      {props.todo.title} 
    </span>
    <button className="rm" onClick={removeTodo.bind(null, props.todo.id)}>&times;</button>
    </li>
  )
} 

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  index: PropTypes.number,
  onChange: PropTypes.func.isRequired
}
export default TodoItem;
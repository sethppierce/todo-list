import React from 'react'
import { ListGroupItem } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';

export default function Todo({ todo, toggleTodo }) {
  
  function handleTodoClick(){
    toggleTodo(todo.id)
  }

  return (
    <ListGroup.Item>
      <input type="checkbox" checked={todo.complete} onChange={handleTodoClick}/>
      {todo.name}
      <span class="checkmark"></span>
    </ListGroup.Item>
  )
}

import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';

export default function Todo({ todo, toggleTodo}) {
  
  function handleTodoClick(){
    toggleTodo(todo.id)
  }

  return (
    <ListGroup.Item>
      <Form>
      {['checkbox'].map((type) => (
        <div key={`default-${type}`} className="mb-3">
          <Form.Check 
            type={type}
            id={`default-${type}`}
            label={` ${todo.name}`}
            checked={todo.complete} 
            onChange={handleTodoClick}
          />
        </div>
      ))}
    </Form>
    </ListGroup.Item>
  )
}

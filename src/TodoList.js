import React from 'react'
import Todo from './Todo'

export default function TodoList({ todos, toggleTodo}) {
  const keyRan = []

  function getRandomInt() {
    let randNum = Math.floor(Math.random() * 10000);
    if( !keyRan.includes(randNum)) {
      keyRan.push(randNum)
      return randNum
    }
  }
  return (
    todos.map(todo => {
      return <Todo key={getRandomInt()} toggleTodo={toggleTodo} todo={todo} />
    })
  )
}
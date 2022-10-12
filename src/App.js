import React, { useState, useRef, useEffect} from 'react';
import TodoList from './TodoList';
import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import ProgressBar from 'react-bootstrap/ProgressBar';

const LOCAL_STORAGE_KEY = 'todoApp.todos'


function App() {
  const [todos, setTodos] = useState([])
  const todoNameRef = useRef()
  const idArr = []

  function getRandomInt() {
    let randNum = Math.floor(Math.random() * 10000);
    if( !idArr.includes(randNum)) {
      idArr.push(randNum)
      return randNum
    }
  }

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedTodos) setTodos( prevTodos => [...prevTodos, ...storedTodos] )
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  function toggleTodo(id) {
    const newTodos = [...todos]
    const todo = newTodos.find(todo => todo.id === id)
    todo.complete = !todo.complete
    setTodos(newTodos)
  }

  function handleAddTodo(e) {
    const name = todoNameRef.current.value
    if (name === '') return
    setTodos(prevTodos => {
      return [...prevTodos, { id:getRandomInt(), name: name, complete: false}];
    })
    todoNameRef.current.value = null
  }

  function handleClearTodos(){
    const newTodos = todos.filter(todo => !todo.complete)
    setTodos(newTodos)
  }

  function handleClearAllTodos(){
    const newTodos = []
    setTodos(newTodos)
  }

  return (
    <>
      <header>
        <h1>Todo-List</h1>
      </header>
      <div className="addTodo">
        <input id='newTodo' ref={todoNameRef} type="text" />
        <Button id='addBtn'onClick={handleAddTodo} variant="dark">Add Todo</Button>
        <Button id='clear' onClick={handleClearTodos} variant="dark">Clear Completed Todos</Button>
        <Button  id='clearAll'onClick={handleClearAllTodos} variant="dark">Clear ALL Todos</Button>
      </div>
        <ProgressBar animated max={todos.length} variant="PROGRESS" now={todos.filter(todo => !todo.complete).length} label={`${todos.filter(todo => !todo.complete).length} left to do`} ></ProgressBar>
      <ListGroup> 
        <TodoList  todos={todos} toggleTodo={toggleTodo} getRandom={getRandomInt}/>
      </ListGroup>
    </>
  );
}

export default App;

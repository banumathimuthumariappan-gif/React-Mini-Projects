import { useState } from 'react'
import './App.css'
import type { ToDo } from './interfaces/todo.interface';

function App() {
  const [task, setTask] = useState('');
  const [todos, setTodos] = useState<ToDo[]>([]);

  const handleAddTask = () => {
    const newToDo: ToDo = {
      id: Date.now(),
      task: task,
      completed: false
    }
    setTodos((prevTodo) => [...prevTodo, newToDo]);
    setTask('');
  }

  const handleToggleTodo = (id: number) => {
    setTodos((prevTodos) => prevTodos.map((todo) => todo.id === id ? {...todo, completed: !todo.completed} : todo));
  }

  const handleDeleteTask = (id: number) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  }

  return (
    <div className="container-fluid">
      <div className="text-center mt-5">
          <h4>To Do Application</h4>
          <div className="row justify-content-center mt-3">
            <div className="col-8">
              <div className='d-flex gap-2'>
                <input type="text" name="task" id="task" placeholder='Enter Task here' className="form-control" value={task} onChange={(event) => setTask(event.target.value)} onKeyDown={(event) => {
                  if(event.key === 'Enter') {
                    handleAddTask();
                  }
                }} />
                <button className="btn btn-primary text-nowrap" onClick={handleAddTask}>Add Task</button>
              </div>
            </div>
          </div>
          <div className="row justify-content-center mt-3">
            <div className="list-group">
              {todos.map((todo: ToDo) => (
                <li className='list-group-item' key={todo.id}>
                  <input type="checkbox" name="task" id="task" className='form-check-input' checked={todo.completed} onChange={() => handleToggleTodo(todo.id)} />
                  <span className={`ms-3 ${todo.completed === true ? 'text-decoration-line-through' : ''}`}>{todo.task}</span>
                  <button className="ms-4 btn btn-sm btn-danger" onClick={() => handleDeleteTask(todo.id)}>Delete</button>
                </li>
              ))}
            </div>
          </div>
      </div>
    </div>
  )
}

export default App

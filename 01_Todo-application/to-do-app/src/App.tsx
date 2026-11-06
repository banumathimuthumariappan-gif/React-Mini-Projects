import { useState } from 'react'
import './App.css'
import type { ToDo } from './interfaces/todo.interface';

function App() {
  const [todo, setToDo] = useState('');
  const [tasks, setTasks] = useState<ToDo[]>([]);

  const handleAddTask = () => {
    console.log(todo);

    const newTodo: ToDo = {
      id: Date.now(),
      task: todo,
      completed: false
    }
    setTasks((prevTasks) => [...prevTasks, newTodo]);
    setToDo('');
  }

  const handleToggleTodo = (id: number) => {
    setTasks((prevTasks) => prevTasks.map((task) => task.id === id ? {...task, completed: !task.completed} : task));
  }

  const handleDeleteTodo = (id: number) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  }

  return (
    <div className="container-fluid">
      <div className="text-center mt-5">
        <h4>To Do App</h4>
        <div className="row justify-content-center">
          <div className="col-8">
            <div className='d-flex gap-2'>
              <input type="text" name="todo" id="todo" value={todo} className='form-control' onChange={(event) => setToDo(event.target.value)} onKeyDown={(event) => {
                if(event.key === 'Enter') {
                  if(todo !== '') {
                    handleAddTask();
                  }
                }
              }} placeholder='Enter To do...'/>
              <button className="btn btn-info" onClick={handleAddTask} disabled={todo === ''}>Add</button>
            </div>
          </div>
        </div>
        <div className="row justify-content-center mt-4">
          <div className="col-8">
            <div className="list-group">
              {tasks.map((task) => (
                <div className="list-group-item" key={task.id}>
                  <input type="checkbox" name="status" id="status" className='form-check-input' onChange={() => handleToggleTodo(task.id)} />
                  <span className={`ms-3 ${task.completed === true ? 'text-decoration-line-through' : ''}`}>{task.task}</span>
                  <button className="ms-3 btn btn-sm btn-danger" onClick={() => handleDeleteTodo(task.id)}>Delete</button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App

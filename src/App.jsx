import { useEffect, useState } from 'react'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import { generateId } from './helpers/index'

function App() {
  const [tasks, setTasks] = useState(
    localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : []
  )
  const [editTask, setEditTask] = useState({})

  useEffect(() => {
    if (tasks.length) {
      localStorage.setItem('tasks', JSON.stringify(tasks ?? []))
    }
  }, [tasks])

  const saveTask = task => {
    const { name, description } = task
    if (Object.keys(editTask).length > 0) {
      const updatedTask = tasks.map(currentTask =>
        currentTask.id === task.id ? task : currentTask)
      setTasks(updatedTask)
      setEditTask({})
    } else {
      const currentTask = { id: generateId(), name, description, complete: false }
      setTasks([...tasks, currentTask])
    }
  }

  const deleteTask = id => {
    const updatedTask = tasks.filter(task => task.id !== id)
    setTasks(updatedTask)

    if (id === editTask.id) {
      setEditTask({})
    }
  }

  const completeTask = task => {
    const updatedTask = tasks.map(currentTask =>
      currentTask.id === task.id ? task : currentTask)
    setTasks(updatedTask)
  }

  return (
    <>
      <div className='container mx-auto bg-slate-900'>
        <div className='md:flex'>
          <TaskForm saveTask={saveTask} editTask={editTask} />
          <TaskList
            tasks={tasks}
            setEditTask={setEditTask}
            deleteTask={deleteTask}
            completeTask={completeTask}
          />
        </div>
      </div>
    </>
  )
}

export default App

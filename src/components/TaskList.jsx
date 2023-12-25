import React from 'react'
import Task from './Task'

const TaskList = ({
  tasks,
  setEditTask,
  deleteTask,
  completeTask
}) => {
  return (
    <div className='w-full md:w-3/5 bg-slate-900'>
      <h1 className='text-white uppercase text-3xl text-center my-12 font-bold'>Tasks List</h1>
      {
        tasks.length === 0 && <p className='text-white text-xl'>There are no tasks available yet</p>
      }
      {
        tasks.map(task => (
          <Task
            key={task.id}
            task={task}
            setEditTask={setEditTask}
            deleteTask={deleteTask}
            completeTask={completeTask}
          />
        ))
      }
    </div>
  )
}

export default TaskList

import React from 'react'
import { FaEdit } from 'react-icons/fa'
import { RiDeleteBin6Fill } from 'react-icons/ri'

const Task = ({
  task,
  setEditTask,
  deleteTask,
  completeTask
}) => {
  const editTask = () => {
    setEditTask({
      id: task.id,
      name: task.name,
      description: task.description,
      complete: task.complete
    })
  }

  return (
    <div
      className={`
      flex 
      justify-between 
      bg-slate-900 
      m-5 
      rounded 
      p-3 
      border-white 
      border 
      ${task.complete ? 'bg-slate-500' : ''}`}
    >
      <label htmlFor={task.id}></label>
      <input
        id={task.id}
        type='checkbox'
        className='h-7 w-7 rounded-full shadow m-3'
        checked={task.complete}
        onChange={(e) => completeTask({ ...task, complete: e.target.checked })}
      />

      <div className='w-full px-3'>
        <p className={`font-bold text-white text-xl ${task.complete ? 'line-through' : ''}`}>{task.name}</p>
        <p className={`text-white ${task.complete ? 'line-through' : ''}`}>{task.description}</p>
      </div>

      <div className='flex justify-between items-center'>
        <FaEdit
          className={`
              text-white  
              text-4xl 
              p-2 
              rounded 
              mr-1 
              cursor-pointer 
              transition-all 
              ${task.complete ? 'bg-sky-300' : 'bg-sky-600 hover:bg-sky-800'}
            `}
          onClick={() => !task.complete ? editTask() : null}
          disabled={task.complete}
        />

        <RiDeleteBin6Fill
          className={`
              text-white  
              text-4xl 
              p-2 
              rounded 
              mr-1 
              cursor-pointer 
              transition-all 
              ${task.complete ? 'bg-red-300' : 'bg-red-600 hover:bg-red-800'}
            `}
          onClick={() => !task.complete ? deleteTask(task.id) : null}
          disabled={task.complete}
        />
      </div>
    </div>
  )
}

export default Task

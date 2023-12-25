import { useEffect, useState } from 'react'
import Error from './Error'

const TaskForm = ({ saveTask, editTask }) => {
  const [id, setId] = useState('')
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [complete, setComplete] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    if (Object.keys(editTask).length > 0) {
      setId(editTask.id)
      setName(editTask.name)
      setDescription(editTask.description)
      setComplete(editTask.complete)
    } else {
      setId('')
      setName('')
      setDescription('')
      setComplete('')
    }
  }, [editTask])

  const handleSubmit = (e) => {
    e.preventDefault()

    if ([name, description].includes('')) {
      setErrorMessage('All fields are required')
      return
    }

    setErrorMessage('')

    if (editTask.id) {
      saveTask({
        id,
        name,
        description,
        complete
      })
    } else {
      saveTask({ name, description })
    }
    setName('')
    setDescription('')
  }

  return (
    <div className='w-full md:w-2/5 bg-slate-900 md:my-auto'>
      <h1 className='text-white uppercase text-3xl text-center my-12 font-bold'>Manage your tasks</h1>

      <form
        onSubmit={handleSubmit}
        className='bg-white shadow-md rounded-lg py-10 px-5 mb-10 mx-10'
      >
        {
          errorMessage && <Error><p>All fields are required</p></Error>
        }
        <div className="mb-5">
          <label
            htmlFor='name'
            className='block text-gray-700 uppercase font-bold'>
            Task name
          </label>

          <input
            id='name'
            type='text'
            placeholder='Task name'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>

        <div className='mb-5'>
          <label
            htmlFor='description'
            className='block text-gray-700 uppercase font-bold'>
            Task description
          </label>

          <textarea
            id='description'
            placeholder='Task description'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
        </div>

        <input
          type='submit'
          className='
            bg-indigo-600 
            w-full 
            p-3 
            text-white 
            uppercase 
            font-bold 
            hover:bg-indigo-700 
            cursor-pointer 
            transition-all
          '
          value={editTask.id ? 'Edit task' : 'Save task'}
        />
      </form>
    </div>
  )
}

export default TaskForm

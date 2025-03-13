import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Random from './components/Random'
import Tag from './components/Tag'
import { Toaster } from 'react-hot-toast'



function App() {
  const [count, setCount] = useState(0)

  return (

    <div className='flex flex-col items-center w-full min-h-screen h-fit py-10 bg-gray-900'>
     <Toaster />
    <div className='w-[90%] text-center bg-gray-100 text-black rounded-3xl py-2'>
      <h1 className ='font-bold text-[2rem]'>Random Gifs</h1>

    </div>

      <div>
        <Random />
        <Tag />
      </div>
   </div>
  )
}

export default App

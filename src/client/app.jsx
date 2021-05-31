import React, { useState } from 'react'
import StreamingForm from './components/streamingForm'
import AsyncForm from './components/asyncForm'


const Tab = ({children, selected, clickHandler}) => {
  return (
    <button 
      className={`
        text-gray-600 
        py-4 px-6 block 
        hover:text-blue-500 
        focus:outline-none 
        ${selected ? "border-b-2 font-medium border-blue-500" : null}`}
        onClick={(e) => clickHandler()}>
          {children}
    </button>
  )
}

const Navigation = ({mode, updateMode}) => {
  return (
    <div className="bg-white">
      <nav className="flex flex-col sm:flex-row">
        <Tab selected={mode === 'async'} clickHandler={() => updateMode('async')}>
          Async
        </Tab>
        <Tab selected={mode === 'streaming'} clickHandler={() => updateMode('streaming')}>
          Streaming
        </Tab>
      </nav>
  </div>

  )
}

function App(props){
  const [loading, setLoading] = useState(true)
  const [mode, setMode] = useState(localStorage.getItem('mode') || 'async')
  
  const onModeChange = (newMode) => {
    localStorage.setItem('mode', newMode)
    setMode(newMode)
  }

  return (
    <section className="text-gray-600 body-font mb-10 md:mb-0 mx-10 ">
      <div className="container mx-auto mt-10 bg-white shadow-xl rounded-lg">
        <Navigation mode={mode} updateMode={onModeChange}/>
        {mode === 'async'? <AsyncForm /> : <StreamingForm />}
      </div>
    </section>
  )
}

export default App;
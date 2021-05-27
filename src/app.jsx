import React, { useEffect, useState } from 'react'
import StreamingForm from './client/components/streamingForm'
import AsyncForm from './client/components/asyncForm'


const ActionButtons = ({mode, updateMode}) => {
  return (
    <div style={{borderBottom: '2px solid #eaeaea'}} className="shadow">
      <ul className='flex cursor-pointer'>
          <li className={`w-full py-2 px-6 rounded-t-lg ${mode === 'async' ? "bg-white": "bg-indigo-100"}`}
          onClick={(e) => updateMode('async')}>
            Async
          </li>
          <li className={`w-full py-2 px-6 rounded-t-lg text-gray-500 ${mode === 'streaming' ? "bg-white": "bg-indigo-100"}`}
            onClick={(e) => updateMode('streaming')}>
            Streaming
          </li>
      </ul>
    </div>
  )
}



const ToggleButton = () => {
  const [toggle, setToggle] = useState(true);
  const [mode, setMode] = useState('Caption')

  const onChangeHandler = (e) => {
    setToggle(!toggle)
  }

  useEffect(() => {
    setMode(toggle? 'Caption': 'Transcription')
  }, [toggle])

  return (
    <div>
      <div className="w-full">
      <label className="switch">
        <input type="checkbox" onChange={onChangeHandler} checked={toggle} />
        <span className="slider round">{mode}</span>
      </label>
      </div>
    </div>

  )
}

function App(props){
  const [loading, setLoading] = useState(true)
  const [mode, setMode] = useState('streaming')
  
  const actionButtonHandler = ({}) => {
    setLoading(!loading)
  }

  return (
    <div className="bg-gray-50 h-screen 
      grid grid-rows-layout grid-cols-layout gap-y-5 gap-x-5
      justify-center justify-items-center items-center">     

        <div className="row-start-2 row-end-3 col-start-2 col-end-3 w-full">
          <ActionButtons mode={mode} updateMode={setMode}/>
        </div>
        <div className="row-start-3 row-end-4 col-start-2 col-end-3med w-full">
            {mode === 'async'? <AsyncForm /> : <StreamingForm />}
        </div>
    </div>
  )
}

export default App;
import { useEffect, useState } from 'react'
// import Link from 'next/link'
// import fetch from 'isomorphic-unfetch'
import useSocket from '../hooks/useSocket'
import UploadForm from '../components/uploadForm'
import MediaPlayer from '../components/mediaPlayer'
//import ServiceSelector from '../components/serviceSelector'
import StreamingForm from '../components/streamingForm'
import {FaBeer} from 'react-icons/fa'



const ActionButtons = ({Icon, mode, updateMode}) => {
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
      {/* <div>{!toggle ? <textarea></textarea> : null}</div> */}
    </div>

  )
}

function Index(props){
  const [loading, setLoading] = useState(true)
  const [mode, setMode] = useState('streaming')
  


  useSocket('message', (message) => {
    console.log(`recieved message ${message}`)
  })

  const actionButtonHandler = ({}) => {
    setLoading(!loading)
  }

  // useSocket('message.chat2', () => {
  //   // setNewMessage(newMessage => newMessage + 1)
  // })

  // const handleSubmit = event => {
  //   event.preventDefault() 

  //   // // create message object
  //   // const message = {
  //   //   id: new Date().getTime(),
  //   //   value: field,
  //   // }

  //   // // send object to WS server
  //   // socket.emit('message.chat1', message)
  //   // setField('')
  //   // setMessages(messages => [...messages, message])
  // }

  return (
    <div className="bg-gray-50 h-screen 
      grid grid-rows-layout grid-cols-layout gap-y-5 gap-x-5
      justify-center justify-items-center items-center">
        {/* <div className="container-item">
            <MediaPlayer />             
        </div>
        <div className="container-item">
            <UploadForm />
            <hr />
            <LiveStreamer />
        </div> */}

        

        <div className="row-start-2 row-end-3 col-start-2 col-end-3 w-full">
          <ActionButtons Icon={FaBeer} mode={mode} updateMode={setMode}/>
        </div>
        <div className="row-start-3 row-end-4 col-start-2 col-end-3med w-full">
            {mode === 'async'? <UploadForm /> : <StreamingForm />}
        </div>
    </div>
  )
}

export default Index;

// ChatOne.getInitialProps = async () => {
//   const response = await fetch('http://localhost:3000/messages/chat1')
//   const messages = await response.json()

//   return { messages }
// }
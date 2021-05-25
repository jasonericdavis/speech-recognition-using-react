import { useEffect, useState } from 'react'
// import Link from 'next/link'
// import fetch from 'isomorphic-unfetch'
import useSocket from '../hooks/useSocket'
import UploadForm from '../components/uploadForm'
import LiveStreamer from '../components/liveStreamer'
import MediaPlayer from '../components/mediaPlayer'
//import ServiceSelector from '../components/serviceSelector'
import {FaBeer} from 'react-icons/fa'


const ActionButtons = ({Icon, mode, updateMode}) => {
  const [activeIndex, setActiveIndex] = useState(0)
  return (
    <div className="w-full">
      <button 
        className={`rounded-lg p-4 ${mode === 'async' ? "bg-white": "bg-indigo-100"}`} 
        onClick={(e) => updateMode('async')}>
        <Icon />Async
      </button>
      <button 
        className={`rounded-lg p-4 ${mode === 'streaming' ? "bg-white": "bg-indigo-100"}`} 
        onClick={(e) => updateMode('streaming')}>
        <Icon />Streaming
      </button>
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
  const [job, setJob] = useState(null)
  const [mode, setMode] = useState('async')
  
  const socket = useSocket('job', message => {
    console.log(`received job ${JSON.stringify(message)}`)
    setJob(message)
  })

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
    <div className="bg-gray-50 h-screen grid grid-rows-layout grid-cols-layout justify-center justify-items-center items-center">
        {/* <div className="container-item">
            <MediaPlayer />             
        </div>
        <div className="container-item">
            <UploadForm />
            <hr />
            <LiveStreamer />
        </div> */}

        

        <div className="row-start-2 row-end-4 col-start-2 col-end-3">
              {loading ? <div><img src="https://via.placeholder.com/400"></img></div> 
                : <MediaPlayer />}
        </div>
        <div className="row-start-2 row-end-3 col-start-3 col-end-4">
          <ActionButtons Icon={FaBeer} mode={mode} updateMode={setMode}/>
        </div>
        <div className="row-start-3 row-end-4 col-start-3 col-end-4">
            {mode === 'async'? <UploadForm /> : <LiveStreamer />}
        </div>
        <div className="row-start-4 row-end-5 col-start-2 col-span-2 bg-blue-100 self-start w-full h-full">
          <p className="w-full">ahahah</p>
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
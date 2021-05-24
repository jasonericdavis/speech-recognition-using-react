// import { useState } from 'react'
// import Link from 'next/link'
// import fetch from 'isomorphic-unfetch'
// import useSocket from '../hooks/useSocket'
import UploadForm from '../components/uploadForm'
import LiveStreamer from '../components/liveStreamer'
import MediaPlayer from '../components/mediaPlayer'
//import ServiceSelector from '../components/serviceSelector'

function Index(props){
  // const socket = useSocket('message.chat1', message => {
  //   // setMessages(messages => [...messages, message])
  // })

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
    <div className="bg-gray-50">
        {/* <div className="container-item">
            <MediaPlayer />             
        </div>
        <div className="container-item">
            <UploadForm />
            <hr />
            <LiveStreamer />
        </div> */}
        <div className="h-screen">
          <div className="h-4/5 w-4/5 flex justify-evenly items-center mx-auto mt-8 bg-blue-300">
            <div>
              <MediaPlayer />
            </div>
            <div>
              <UploadForm />
                <hr />
              <LiveStreamer />
            </div>
          </div>
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
import { useState } from 'react'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import useSocket from '../hooks/useSocket'

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
    <main>
        <div className="container-item">
            <video preload="metadata" id="media_player" controls>
                <source type="video/mp4" />
                <track id="caption" kind="subtitles" srcLang="en" label="English" default />
            </video>
            <div class="output-type">
                <input type="radio" id="captionRb" name="output-type" value="caption" />
                <label for="caption">Caption</label><br />
                <input type="radio" id="transcriptionRb" name="output-type" value="transcription" checked />
                <label for="transcription">Transcription</label><br />
            </div>
            <div id="transcription" class="transcription">
                Waiting for a transcription
            </div>                
        </div>
        <div className="container-item">
            <h2>Choose an audio/video file to process</h2>
            <form id="form">
                <div>
                    <label for="mediaFile">Choose a media file to process</label>
                    <input type="file" name="mediaFile" />
                </div>
                <div>
                    <input type="submit" />
                </div>
            </form>
            <hr />
            <div>
                <h2>Or Live-Stream</h2>
                <button id="startBtn">Start Recording</button>
                <button id="stopBtn">Stop Recording</button>
            </div>
        </div>
    </main>
  )
}

export default Index;

// ChatOne.getInitialProps = async () => {
//   const response = await fetch('http://localhost:3000/messages/chat1')
//   const messages = await response.json()

//   return { messages }
// }
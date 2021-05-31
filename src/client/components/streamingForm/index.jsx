import React,{ useState, useEffect } from 'react'
import useSocket from '../../hooks/useSocket'
import {PrimaryButton} from '../common/buttons'

let streamingAudio = null

const streamAudio = (socket) => {
    navigator.mediaDevices.getUserMedia({audio: true, video: false})
        .then(stream => {
        streamingAudio = RecordRTC(stream, {
            type: 'audio',
            mimeType: 'audio/wav',
            timeSlice: 500,

            ondataavailable: (blob) => {
                socket.emit('stream', blob)
            }
        })

        streamingAudio.startRecording();
    })
}

const displayTranscription = (transcript) => {
    return transcript.elements.reduce((a, b) => {
        a += ` ${b.value}`
        return a;
    }, '')

}


const StreamingForm = () => {
    const [transcript, setTranscript] = useState(null)
    const socket = useSocket('transcript', data => {
        console.log(`data recieved: ${JSON.stringify(data)}`)
        setTranscript(data)
    })

    const startStreaming = (evt) => {
        console.log('start streaming')
        fetch('/api/stream/start', {method: 'post'})
        .then( response => {
            streamAudio(socket)
            console.log('streaming started')
        })
    }

    const stopStreaming = (evt) => {
        console.log('stop streaming')
        fetch('/api/stream/stop', {method: 'post'})
        .then( response => {
            streamingAudio && streamingAudio.stopRecording();

            // const videoPlayer = document.getElementById("media_player")
            // videoPlayer.srcObject = null
            console.log('streaming ended')
        })
    }

    // useEffect(() => {
    //     return () => {
    //         stopStreaming()
    //     }
    // })

    return (
        <div className="flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                {transcript ? 
                    displayTranscription(transcript) 
                    : "Begin Streaming To See Transcription"
                }
            </h1>
            <p className="mb-8 leading-relaxed"></p>
            <div className="flex justify-center">
                <PrimaryButton onClick={startStreaming}>
                  Start Streaming
                </PrimaryButton>
                <PrimaryButton onClick={stopStreaming }>
                  Stop Streaming
                </PrimaryButton>
            </div>
          </div>
        </div>
    )
}

export default StreamingForm
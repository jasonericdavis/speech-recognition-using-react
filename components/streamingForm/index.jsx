import { useEffect } from 'react'
import useSocket from '../../hooks/useSocket'

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

const StreamingForm = () => {
    const socket = useSocket('transcript', data => {
        console.log(`data recieved: ${JSON.stringify(data)}`)
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

    useEffect(() => {
        return () => {
            stopStreaming()
        }
    })

    return (
        <div>
            <button onClick={startStreaming}>Start Recording</button>
            <button onClick={stopStreaming }>Stop Recording</button>
        </div>
    )
}

export default StreamingForm
import React,{ useEffect, useState } from 'react'

let streamingAudio = null

//TODO: listen for stop streaming socket message
const connect = ({constraints, streamListener, dataCb}, connectedCb) => {
    navigator.mediaDevices.getUserMedia(constraints)
        .then(stream => {
        streamingAudio = RecordRTC(stream, {
            type: 'audio',
            mimeType: 'audio/wav',
            timeSlice: 500,

            ondataavailable: (blob) => {
                dataCb(blob)
                console.log('streaming')
            }
        })

        if(streamListener) streamListener(stream)
        console.log('Audio Streamer Connected')
        connectedCb(true)
    })

}

export default function useUserMedia({constraints, streamListener, dataCb}) {
    const [connected, setConnected] = useState(false)
    const [streaming, setStreaming] = useState(false)

    useEffect(() => {
        if(!connected) connect({constraints, streamListener, dataCb}, 
            connected => {
                setConnected(connected)
            })
  
      return function useAudioStreamerCleanup() {
        streamAudio.stopRecording()
      }
    }, [])

    const startStreaming = () => {
        if(!connected){
            console.log('The Audio Streaming is not connected. Refresh and try again')
            return
        }
        streamingAudio.startRecording()
        setStreaming(true)
    }

    const stopStreaming = () => {
        streamingAudio && streamingAudio.stopRecording()
        setStreaming(false)
    }
  
    return {
        startStreaming,
        stopStreaming,
        streaming,
        connected
    }
}
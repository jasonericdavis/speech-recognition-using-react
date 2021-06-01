import React from 'react'
import StreamingCaptionViewer from './streamingCaptionViewer'
import StreamingController from './streamingController'

//let streamingAudio = null
// const streamAudio = (socket) => {
//     navigator.mediaDevices.getUserMedia({audio: true, video: false})
//         .then(stream => {
//         streamingAudio = RecordRTC(stream, {
//             type: 'audio',
//             mimeType: 'audio/wav',
//             timeSlice: 500,

//             ondataavailable: (blob) => {
//                 socket.emit('stream', blob)
//             }
//         })

//         streamingAudio.startRecording();
//     })
// }

const StreamingForm = () => {
    //const [transcript, setTranscript] = useState(null)
    // const socket = useSocket('transcript', data => {
    //     console.log(`data recieved: ${JSON.stringify(data)}`)
    //     setTranscript(data)
    // })

    
    // useEffect(() => {
    //     return () => {
    //         stopStreaming()
    //     }
    // })

    return (
        <div className="flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                <StreamingCaptionViewer />
            </div>
            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                {/* <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                     {transcript ? 
                        displayTranscription(transcript) 
                        : "Begin Streaming To See Transcription"
                    } 
                </h1>
                
                <div className="flex justify-center">
                    <StreamingController />
                </div> */}
                <StreamingController />
            </div>
        </div>
    )
}

export default StreamingForm
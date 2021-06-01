import React, {useState} from 'react'
import useSocket from '../../hooks/useSocket'

const displayTranscription = (transcript) => {
    return transcript.elements.reduce((a, b) => {
        a += ` ${b.value}`
        return a;
    }, '')

}

const StreamingCaptionViewer = () => {
    const [transcript, setTranscript] = useState(null)
    const socket = useSocket('transcript', data => {
        console.log(`data recieved: ${JSON.stringify(data)}`)
        setTranscript(data)
    })

    return (
        <div className="w-full">
            {/* <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" /> */}
            <p>{transcript ? displayTranscription(transcript) : null}</p>
        </div>
    )
}

export default StreamingCaptionViewer
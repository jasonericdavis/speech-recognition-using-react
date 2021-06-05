import React, {useEffect} from 'react'
import useSocket from '../../hooks/useSocket'
import {PrimaryButton} from '../common/buttons'

let streamingAudio = null

//TODO: listen for stop streaming socket message
const streamAudio = ({socket, canvasRef}) => {
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

        window.AudioContext = window.AudioContext || window.webkitAudioContext
        let audioContext = new AudioContext();

        const bufferLength = 1024
        let analyser = audioContext.createAnalyser();
        analyser.fftSize = bufferLength

        let source = audioContext.createMediaStreamSource(stream);
        source.connect(analyser)
        
        let data = new Uint8Array(analyser.frequencyBinCount);
        const context = canvasRef.current.getContext("2d")


        streamingAudio.startRecording();

        var width = canvasRef.current.width;
        var height = canvasRef.current.height;
        var barWidth = (width / bufferLength) * 2.5;

        function renderFrame() {
            requestAnimationFrame(renderFrame)

            let x = 0;
            let barHeight;
            analyser.getByteFrequencyData(data);

            context.fillStyle = "#fff";
            context.fillRect(0, 0, width, height);

            for (var i = 0; i < bufferLength; i++) {
                barHeight = data[i];
                
                var r = barHeight + (25 * (i/bufferLength));
                var g = 250 * (i/bufferLength);
                var b = 50;

                context.fillStyle = `rgb(${r},${g},${b})`;
                context.fillRect(x, height - barHeight, barWidth, barHeight);

                x += barWidth + 1;
            }
        }

        renderFrame()
    })

}


const StreamingController = () => {
    const canvasRef = React.createRef();

    const socket = useSocket('streaming-connected', connectionMessage => {
        console.log(`Connection Message: ${JSON.stringify(connectionMessage)}`)
        if(connectionMessage.type === 'connected') {
            streamAudio({socket, canvasRef})
        }
    })

    const startStreaming = (evt) => {
        console.log('start streaming')
        fetch('/api/stream/start', {method: 'post'})
        .then( response => {
            console.log('stream requested')
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

    return (
        <>
            <canvas className="w-full" ref={canvasRef}></canvas>
            <div className="flex justify-center">
                <PrimaryButton onClick={startStreaming}>
                    Start Streaming
                </PrimaryButton>
                <PrimaryButton onClick={stopStreaming }>
                    Stop Streaming
                </PrimaryButton>
            </div>
        </>
    )
}


export default StreamingController
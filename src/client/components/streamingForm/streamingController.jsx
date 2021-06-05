import React, {useEffect} from 'react'
import useSocket from '../../hooks/useSocket'
import useUserMedia from '../../hooks/useUserMedia'
import {PrimaryButton} from '../common/buttons'

const bufferLength = 1024
window.AudioContext = window.AudioContext || window.webkitAudioContext
let audioContext = new AudioContext();
let analyser = audioContext.createAnalyser();
analyser.fftSize = bufferLength

const audioVisual = ({canvasRef, analyser, bufferLength}) => {
    const context = canvasRef.current.getContext("2d")
    let data = new Uint8Array(analyser.frequencyBinCount);
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
}


const StreamingController = () => {
    const canvasRef = React.createRef();

    const socket = useSocket('streaming-connected', connectionMessage => {
        console.log(`Connection Message: ${JSON.stringify(connectionMessage)}`)
        if(connectionMessage.type === 'connected') {
            //streamAudio({socket, canvasRef})
            audioStreamer.startStreaming()
            audioVisual({canvasRef, analyser, bufferLength: bufferLength})
        }
    })

    const constraints = {audio: true, video: false}
    const audioStreamer = useUserMedia({
        constraints, 
        streamListener: (stream) => {
            let source = audioContext.createMediaStreamSource(stream);
            source.connect(analyser)
        }, 
        dataCb: (data) => socket.emit('stream', data)
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
    
            // const videoPlayer = document.getElementById("media_player")
            // videoPlayer.srcObject = null
            audioStreamer.stopStreaming()
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
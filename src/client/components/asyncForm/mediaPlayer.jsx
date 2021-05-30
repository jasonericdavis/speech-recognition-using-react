import React, { useState, useEffect } from "react"

const MediaPlayer = ({src, caption}) => {
    const [cues, setCues] = useState(null)
    const captionRef = React.createRef();

    useEffect(() => {
        const captionBlob = new Blob([caption], {
            type:"text/vtt;charset=utf-8"
        });
        const url = URL.createObjectURL(captionBlob);
        captionRef.current.mode = "showing";
        captionRef.current.src = url;
        captionRef.current.oncuechange = (e) => {
            if(e.target.track.activeCues.length > 0){
                console.log(`cue detected ${e.target.track.activeCues.length}`)
                //e.target.track.activeCues[0].line = 0
                Object.keys(e.target.track.cues).map(key => {
                    e.target.track.cues[key].line = 0
                })
                //setCues(e.target.track.activeCues[0].text)
            }
        }
    }, [])

   return (
    <>
        <p>{cues}</p>
        <video id="media_player" src={src} controls>
            <source type="video/mp4" />
            <track ref={captionRef} kind="subtitles" srcLang="en" label="English" default />
        </video>
        {/* <div className="output-type">
            <input type="radio" id="captionRb" name="output-type" value="caption" onChange={handleOutputTypeChange} />
            <label htmlFor="caption">Caption</label><br />
            <input type="radio" id="transcriptionRb" name="output-type" value="transcription" checked onChange={handleOutputTypeChange} />
            <label htmlFor="transcription">Transcription</label><br />
        </div> */}
        <div id="transcription" className="transcription p-4">
            {caption? caption : 'Waiting for a transcription'}
        </div>
    </>
   )
}

export default MediaPlayer
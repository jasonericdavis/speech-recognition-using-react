const MediaPlayer = () => {
    const handleOutputTypeChange = (event) => {

    }

   return (
    <>
        <video preload="metadata" id="media_player" controls>
            <source type="video/mp4" />
            <track id="caption" kind="subtitles" srcLang="en" label="English" default />
        </video>
        <div className="output-type">
            <input type="radio" id="captionRb" name="output-type" value="caption" onChange={handleOutputTypeChange} />
            <label htmlFor="caption">Caption</label><br />
            <input type="radio" id="transcriptionRb" name="output-type" value="transcription" checked onChange={handleOutputTypeChange} />
            <label htmlFor="transcription">Transcription</label><br />
        </div>
        <div id="transcription" className="transcription">
            Waiting for a transcription
        </div>
    </>
   )
}

export default MediaPlayer
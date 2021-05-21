const UploadForm = () => {
    return (
        <>
            <h2>Choose an audio/video file to process</h2>
            <form id="form">
                <div>
                    <label htmlFor="mediaFile">Choose a media file to process</label>
                    <input type="file" name="mediaFile" />
                </div>
                <div>
                    <input type="submit" />
                </div>
            </form>
        </>
    )
}

export default UploadForm
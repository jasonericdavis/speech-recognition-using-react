import React, {useEffect, useState} from 'react'
import useSocket from '../../hooks/useSocket'
import MediaPlayer from './mediaPlayer'
import Loading from '../common/loading'


const UploadForm = () => {
    const [file, setFile] = useState(null);
    const fileInput = React.createRef();

    const chooseFileHandler = (e) => {
        fileInput.current.click();
    }

    const onFileChange = (e) => {
        console.log(e.target.files)
        setFile(e.target.files[0])
    }

    const submit = (e) => {
        const formData = new FormData();
        formData.append("mediaFile", file)

        fetch("/api/media", {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(data  => {
            console.dir(data)
        })
        .catch(err => console.log(err))
        console.log(`Form Submitted`);
    }

    return (
        <div className="p-2">
            <label htmlFor="mediaFile">{file ? file.name : 'Choose a media file to process' }</label>
            <br />
            <input 
                type="file"  
                className="hidden" 
                ref={fileInput}
                onChange={onFileChange}/>
            <div className="inline-flex justify-evenly">
            <button
                className="inline-flex items-center h-10 px-2 mx-2
                nline-block py-2 text-xs font-medium leading-6 text-center text-white uppercase transition bg-blue-700 rounded shadow ripple 
                hover:shadow-lg hover:bg-blue-800 focus:outline-none"
                onClick={chooseFileHandler}>
                <span className="px-2">Select</span>
            </button>
            <button className="inline-flex items-center h-10 px-2 mx-2
                nline-block py-2 text-xs font-medium leading-6 text-center text-white uppercase transition bg-blue-700 rounded shadow ripple 
                hover:shadow-lg hover:bg-blue-800 focus:outline-none" onClick={submit}>Submit</button>

            </div>
        </div>
    )
}

const AsyncForm = () => {
    const [loading, setLoading] = useState(false)
    const [job, setJob] = useState(null)
    const [caption, setCaption] = useState(null)

    const socket = useSocket('job', message => {
        console.log(`received job ${JSON.stringify(message)}`)
        setJob(message.job)
        setCaption(null)
    })

    useEffect(() => {
        setJob(JSON.parse(localStorage.getItem('job'))?.job || null)
        setCaption(localStorage.getItem('caption'))

    },[])

    // useEffect(() => {
    //     if(!job) return

    //     const url = `/api/caption/${job.id}`
    //     fetch(url)
    //     .then(res => res.text())
    //     .then(caption => {
    //         setCaption(caption)
    //     })
    //     .catch(err => console.log(err))
    // }, [job])

    return (
        <div className="flex flex-col items-center">
            <div className="row-start-3 row-end-4 col-start-2 col-end-3 flex-grow">
                {job && caption ? <MediaPlayer src={job.media_url} caption={caption} /> 
                    : <div><Loading /></div>}
            </div>
            <div className="flex-grow">{ loading ? <Loading /> : <UploadForm /> }</div>
        </div>
    )
}

export default AsyncForm
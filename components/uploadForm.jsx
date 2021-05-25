import React, {useState} from 'react'
import useSocket from '../hooks/useSocket'

const Loading = () => <p>Loading</p>

const UploadForm = () => (
    <div className="p-2">
        <label htmlFor="mediaFile">Choose a media file to process</label>
        <br />
        <input 
            type="file"  
            className="hidden" 
            ref={fileInput}
            onChange={onFileChange}/>
            {file? <p className="p-2">{file.name}</p>: null}
        <button
            className="inline-flex items-center h-10 px-5 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800"
            onClick={chooseFileHandler}>
            <svg className="w-4 h-4 ml-3 fill-current" viewBox="0 0 20 20"><path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" fillRule="evenodd"></path></svg>
            <span>Choose a File...</span>
        </button>
        <div className="p-2"><button onClick={submit}>Submit</button></div>
    </div>
)

const AsyncForm = () => {
    const [loading, setLoading] = useState(false)
    const [file, setFile] = useState(null);
    const [job, setJob] = useState(null)
    const fileInput = React.createRef();

    const socket = useSocket('job', message => {
        console.log(`received job ${JSON.stringify(message)}`)
        setJob(message)
    })

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

    return <div>{ loading ? <Loading /> : <AsyncForm /> }</div>
}

export default AsyncForm
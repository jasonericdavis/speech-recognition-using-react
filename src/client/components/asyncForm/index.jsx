import React, {useEffect, useState} from 'react'
import useSocket from '../../hooks/useSocket'
import MediaPlayer from './mediaPlayer'
import Loading from '../common/loading'
import {PrimaryButton, SecondaryButton} from '../common/buttons'


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
        <>
            <h1 className="title-font sm:text-2xl text-xl mb-4 font-medium 
                    text-gray-900">
                    {file ? file.name : "Choose A File To Transcribe"}
            </h1>
            <p className="mb-8 leading-relaxed"></p>
            <div className="flex justify-center">
                <input 
                type="file"  
                className="hidden" 
                ref={fileInput}
                onChange={onFileChange}/>
                <PrimaryButton onClick={chooseFileHandler}>
                    Upload File
                </PrimaryButton>
                <SecondaryButton onClick={submit}>
                    Submit
                </SecondaryButton>
            </div>
        </>
    )
}

const AsyncForm = () => {
    const [loading, setLoading] = useState(false)
    const [job, setJob] = useState(
        localStorage.getItem('job') ?
        JSON.parse(localStorage.getItem('job')) : null
    )
    const [caption, setCaption] = useState(
        localStorage.getItem('caption') ?
        JSON.parse(localStorage.getItem('caption')) : null
    )

    const socket = useSocket('job', ({job}) => {
        console.log(`received job ${JSON.stringify(job)}`)
        localStorage.setItem('job', JSON.stringify(job))
        localStorage.setItem('caption', null)
        setJob(job)
        setCaption(null)
    })

    // useEffect(() => {
    //     setJob(JSON.parse(localStorage.getItem('job'))?.job || null)
    //     setCaption(localStorage.getItem('caption'))

    // },[])

    useEffect(() => {
        if(!job) return

        const url = `/api/caption/${job.id}`
        fetch(url)
        .then(res => res.text())
        .then(caption => {
            localStorage.setItem('caption', JSON.stringify(caption))
            setCaption(caption)
        })
        .catch(err => console.log(err))
    }, [job])

    return (
        <div className="flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                { job && caption
                    ? <MediaPlayer src={job.media_url} caption={caption} /> 
                    : <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />
                }
            </div>
            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                <UploadForm />
            </div>
        </div>
    )
}

export default AsyncForm
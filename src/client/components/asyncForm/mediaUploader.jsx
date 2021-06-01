import React, {useState} from 'react'
import {PrimaryButton, SecondaryButton} from '../common/buttons'

const MediaUploader = () => {
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
                    {file ? file : "Choose A File To Transcribe"}
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

export default MediaUploader
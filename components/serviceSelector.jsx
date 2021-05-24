import Link from 'next/link'

const ServiceItem = ({title, children}) => {
    const onClickButton = (event) => {
        event.preventDefault()
        console.log("I was clicked")
    }
    return (
        <button className="mw6-ns w-40-l w-100 pa5-ns pa4 flex-column mr5-l bg-white" onClick={onClickButton}>
            <div className="rounded-3xl align-middle px-1 h-56 w-72 shadow-lg">
                {title}
            </div>
        </button>
    )
}

const ServiceSelector = () => {
    return (
        <div className="mw9 center mt2 py-5 h-screen">
            <div className="font-extrabold text-center">Select a service</div>
            <div className="justify-center flex flex-wrap flex-nowrap-l">
                <ServiceItem title="upload File">
                    
                </ServiceItem>
                <ServiceItem title="Record Microphone" />
            </div>
        </div>
    )
}

export default ServiceSelector
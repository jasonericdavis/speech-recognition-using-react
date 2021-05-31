import React from 'react'

export const PrimaryButton = ({children, ...rest}) => {
    return (
        <button 
            className="
                mx-4 inline-flex 
                text-white bg-indigo-500 border-0 
                py-2 px-6 
                focus:outline-none 
                hover:bg-indigo-600 rounded text-lg"
                {...rest}
            >
            {children}
        </button>
    )
}

export const SecondaryButton = ({children, ...rest}) => {
    return (
        <button 
            className="mx-4 inline-flex text-gray-700 
                bg-gray-100 
                border-0 py-2 px-6 
                focus:outline-none hover:bg-gray-200 
                rounded text-lg"
                {...rest}
            >
            {children}
        </button>
    )
}
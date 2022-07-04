import React from 'react'
import './BgElementStyle.css'

const BgElement = ({ children }) => {

    return (
        <div className='app-div'>
            <div className='bg-container-all'>
                <div className="blur-screen">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default BgElement
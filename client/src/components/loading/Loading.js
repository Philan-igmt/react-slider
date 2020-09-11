import React from 'react'
import './Loading.css'
import loading from './loading.gif'

const Loading = () => {
    return (
        <div className="loading center">
            <img src={loading} className="loadingGIF" alt='nothing'/>
        </div>
    )
}

export default Loading

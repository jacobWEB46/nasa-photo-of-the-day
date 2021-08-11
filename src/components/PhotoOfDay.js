import React, { useEffect, useState } from 'react'
import App from '../App'

export default function PhotoOfDay(props) {
    const { nasData, prevClicked, nextClicked, showNextButton } = props
    console.log(nasData)
    return (
    <div className='pic-container'>
        <div>
            <h2>NASA photo of the day {nasData.date}</h2>
            <p>{nasData.title}</p>
            <p className="copyright">Photographed by: {nasData.copyright}</p>
            <img className="pod" src={nasData.hdurl} alt="test" />
            <p>{nasData.explanation}</p>
        </div>
        <button onClick={prevClicked}>Prev</button>
        
        {showNextButton && <button onClick={nextClicked}>Next</button>}

    </div>
    )
}

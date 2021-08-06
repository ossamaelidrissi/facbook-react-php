import React from 'react'
import './ReelStory.scss';
import Story from './Story/Story';

export default function ReelStory(){
    return(
        <div className = "ReelStory">
            <Story 
                image = "http://localhost:7882/LTAPROJECT/IMAGES/Image-2.jpg"
                profileSrc = "http://localhost:7882/LTAPROJECT/IMAGES/IMG_7528.PNG"
                title = "Ossama elidrissi"
            />
            <Story 
                image = "http://localhost:7882/LTAPROJECT/IMAGES/Image-3.jpg"
                profileSrc = "http://localhost:7882/LTAPROJECT/IMAGES/IMG_7528.PNG"
                title = "Bill Gates"
            />
            <Story 
                image = "http://localhost:7882/LTAPROJECT/IMAGES/Image-4.jpg"
                profileSrc = "http://localhost:7882/LTAPROJECT/IMAGES/IMG_7528.PNG"
                title = "Franki"
            />
            <Story 
                image = "http://localhost:7882/LTAPROJECT/IMAGES/Image-5.jpg"
                profileSrc = "http://localhost:7882/LTAPROJECT/IMAGES/IMG_7528.PNG"
                title = "Mark zuckerbirg"
            />
            <Story 
                image = "http://localhost:7882/LTAPROJECT/IMAGES/Image-6.jpg"
                profileSrc = "http://localhost:7882/LTAPROJECT/IMAGES/IMG_7528.PNG"
                title = "Mark zuckerbirg"
            />
        </div>  
    )
}
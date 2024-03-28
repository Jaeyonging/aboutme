import React, { useState } from 'react'
import { NavBar } from '../components/NavBar'

export const About = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleDetails = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <NavBar></NavBar>
            <div className='about-cont'>
                <img className="me-img" src='./me.png'></img>
                <div className='about-me-cont'>
                    <div>
                        Jaeyong Choi
                    </div>
                    <div>
                        <button>hi</button>
                        <button>hi</button>
                        <button>hi</button>
                    </div>
                </div>
            </div>
        </>
    )
}

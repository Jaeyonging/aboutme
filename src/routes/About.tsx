import React, { useState } from 'react'
import { NavBar } from '../components/NavBar'
import { AboutMe } from '../components/AboutMe';

export const About = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [tap, setTap] = useState("About me")
    const toggleDetails = () => {
        setIsOpen(!isOpen);
    };

    const tapClick = (title: string) => {
        setTap(title)
    }

    return (
        <>
            <NavBar></NavBar>
            <div className='about-cont'>
                <img className="me-img" src='./me.png'></img>
                <div>

                    <div className='about-me-descr'>
                        <button className='aboutme-btn' onClick={() => tapClick("About me")}>About Me</button>
                        <button className='aboutme-btn' onClick={() => tapClick("Projects")}>Projects</button>
                        <button className='aboutme-btn' onClick={() => tapClick("Activity")}>Activity</button>
                        <button className='aboutme-btn' onClick={() => tapClick("History")}>History</button>
                        <button className='aboutme-btn' onClick={() => tapClick("School Activity")}>School Activity</button>
                        <button className='aboutme-btn' onClick={() => tapClick("TMI")}>TMI</button>
                    </div>
                </div>

                <AboutMe title={tap}></AboutMe>
            </div >
        </>
    )
}
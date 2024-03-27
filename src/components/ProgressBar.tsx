import { LinearProgress } from '@mui/material'
import { IoIosArrowDropdown, IoIosArrowDropup } from "react-icons/io";
import React, { useState } from 'react'

interface Props {
    title: string,
    value: number,
    color: string,
}

export const ProgressBar = ({ title, value, color }: Props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDetails = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <div className='skill'>
                <div className='skill-title'>
                    {title}:
                </div>
                <LinearProgress variant="determinate" className='progressbar' value={value} sx={{
                    height: 15,
                    '& .MuiLinearProgress-barColorPrimary': {
                        backgroundColor: color
                    }
                }} />
                {value}%
                {isOpen ? <IoIosArrowDropup onClick={toggleDetails} className='dropdown-logo' /> : <IoIosArrowDropdown onClick={toggleDetails} className='dropdown-logo' />}
            </div>
            <div className={`dropdown-detail ${isOpen ? 'open' : ''}`}>
                <div className='dropdown-cont'>
                    <div className='dropdown-title'>
                        {title}
                    </div>
                    <div>
                        h1
                    </div>
                    <div>
                        hi2
                    </div>
                    <div>
                        hi
                    </div>
                    <div>
                        hi
                    </div>
                    <div>
                        hi
                    </div>
                    <div>
                        hi
                    </div>
                </div>
            </div>
        </>

    );
}

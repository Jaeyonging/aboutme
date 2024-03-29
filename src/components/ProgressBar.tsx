import { LinearProgress } from '@mui/material';
import { IoIosArrowDropdown, IoIosArrowDropup } from "react-icons/io";
import React, { useEffect, useState } from 'react';
import { SkillMap } from '../types/types';

interface Props {
    title: string;
    value: number;
    color: string;
}

export const ProgressBar = ({ title, value, color }: Props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [description, setDescription] = useState<string[]>([]);
    const toggleDetails = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        if (SkillMap.has(title)) {
            setDescription(SkillMap.get(title) || []);
        }
    }, [title]);

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
                    {description.map((item, index) => (
                        <div key={index}>
                            - {item}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

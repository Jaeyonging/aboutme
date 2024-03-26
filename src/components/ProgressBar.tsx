import { LinearProgress } from '@mui/material'
import React from 'react'

interface Props {
    title: string,
    value: number,
    color: string,
}

export const ProgressBar = ({ title, value, color }: Props) => {
    return (

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
        </div>)
}

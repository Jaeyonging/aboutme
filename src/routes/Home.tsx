import React, { useEffect, useState } from 'react'
import { Login } from '../components/Login'
import { NavBar } from '../components/NavBar'
import { CardView } from '../components/CardView'
import { LinearProgress } from '@mui/material';
import { ProgressBar } from '../components/ProgressBar';

export const Home = () => {
  const [value, setValue] = useState([0, 0, 0, 0, 0, 0, 0])

  useEffect(() => {
    const timer = setInterval(() => {
      setValue([80, 40, 50, 70, 40, 50])
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }
    , [])
  return (
    <>
      <NavBar></NavBar>
      <div className='home-cont'>
        <img className="me-logo" src='../me.png'></img>
        <div>
          Name: Jaeyong Choi
        </div>
        <ProgressBar title='TypeScript' value={value[0]} color='blue' ></ProgressBar>
        <ProgressBar title='Javascript' value={value[1]} color='rgb(100,200,0, 90)'></ProgressBar>
        <ProgressBar title='Java' value={value[2]} color='rgb(100,200,0, 90)'></ProgressBar>
        <ProgressBar title='Kotlin' value={value[3]} color='rgb(100,200,0)'></ProgressBar>
        <ProgressBar title='Python' value={value[4]} color='rgb(100,200,0)'></ProgressBar>
      </div>
    </>
  )
}

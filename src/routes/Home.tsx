import React, { useEffect, useState } from 'react'
import { Login } from '../components/Login'
import { NavBar } from '../components/NavBar'
import { CardView } from '../components/CardView'
import { LinearProgress } from '@mui/material';
import { ProgressBar } from '../components/ProgressBar';
import Lottie from 'lottie-react';

import ReactLogo from '../assets/lottie/react.json'
import AndroidLogo from '../assets/lottie/android.json'
import GameLogo from '../assets/lottie/game.json'

export const Home = () => {
  const [value, setValue] = useState([0, 0, 0, 0, 0, 0, 0])

  useEffect(() => {
    const timer = setInterval(() => {
      setValue([80, 50, 50, 70, 80])
    }, 150);

    return () => {
      clearInterval(timer);
    };
  }, [])
  return (
    <>
      <NavBar></NavBar>
      <div className='home-cont'>
        <img className="me-logo" src='../me.png'></img>
        <div>
          Name: Jaeyong Choi
        </div>
        <ProgressBar title='TypeScript' value={value[0]} color='red' ></ProgressBar>
        <ProgressBar title='Javascript' value={value[1]} color='orange'></ProgressBar>

        <ProgressBar title='Java' value={value[2]} color='yellow'></ProgressBar>

        <ProgressBar title='Kotlin' value={value[3]} color='green'></ProgressBar>

        <ProgressBar title='Python' value={value[4]} color='blue'></ProgressBar>


        <div className='skill-logos'>
          <div>
            <Lottie style={{ width: 50 }} animationData={ReactLogo}></Lottie>
            React
          </div>
          <div>
            <Lottie style={{ width: 50 }} animationData={AndroidLogo}></Lottie>
            Android
          </div>
          <div>
            <Lottie style={{ width: 50 }} animationData={GameLogo}></Lottie>
            Phaser
          </div>
        </div>
      </div>
    </>
  )
}

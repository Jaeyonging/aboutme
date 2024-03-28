import React, { useEffect, useState } from 'react'
import { Login } from './Login/Login'
import { NavBar } from '../components/NavBar'
import { CardView } from '../components/CardView'
import { LinearProgress } from '@mui/material';
import { ProgressBar } from '../components/ProgressBar';
import Lottie from 'lottie-react';

import ReactLogo from '../assets/lottie/react.json'
import AndroidLogo from '../assets/lottie/android.json'
import GameLogo from '../assets/lottie/game.json'
import DeveloperLogo from '../assets/lottie/developer.json'
import ThreejsLogo from '../assets/lottie/threejs.json'
import AppleLogo from '../assets/lottie/apple.json'
import { Skill } from '../components/Skill';
import FallingStar from '../components/FallingStar';


export const Home = () => {
  const [value, setValue] = useState([0, 0, 0, 0, 0, 0, 0])
  useEffect(() => {
    setTimeout(() => {
      setValue([80, 50, 40, 60, 80, 10])
    }, 150)
  }, [])
  return (
    <>
      <NavBar></NavBar>
      <FallingStar></FallingStar>
      <div className='home-cont'>
        <Lottie style={{ width: 400, marginTop: -60 }} animationData={DeveloperLogo}></Lottie>
        <div className='home-quote'>
          The only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle.
        </div>
        <div className='home-quote-name'>
          -Steve Jobs-
        </div>
        <ProgressBar title='Typescript' value={value[0]} color='red' />
        <ProgressBar title='Javascript' value={value[1]} color='orange' />
        <ProgressBar title='Java' value={value[2]} color='yellow' />
        <ProgressBar title='Kotlin' value={value[3]} color='green' />
        <ProgressBar title='Python' value={value[4]} color='blue' />
        <ProgressBar title='Swift' value={value[5]} color='violet' />
        <div className='home-projects'>
          You can checkout my projects in 'Projects'
        </div>
        <div className='skill-logos'>
          <div>
            <Skill lottieStyle={{ width: 50 }} animationData={ReactLogo} >React</Skill>
          </div>
          <Skill lottieStyle={{ width: 50 }} animationData={AndroidLogo} >Android</Skill>
          <div>
            <Skill lottieStyle={{ width: 50 }} animationData={GameLogo} >Phaser</Skill>
          </div>
          <div>
            <Skill lottieStyle={{ width: 50, marginTop: 12 }} animationData={ThreejsLogo} >ThreeJS</Skill>
          </div>
          <div>
            <Skill lottieStyle={{ width: 50, marginLeft: -13 }} animationData={AppleLogo} >IOS</Skill>
          </div>
        </div>
      </div>
    </>
  )
}

import React, { useEffect, useState } from 'react'
import { NavBar } from '../components/NavBar'
import { AboutCard } from '../components/AboutCard'
import { LearnedCard } from '../components/LearnedCard'
import { Learneds } from '../types/types'
import { FetchLearned, FetchProjects } from '../firebase/firebaseFetch'
import { useSelector } from 'react-redux'
import { RootState } from '../store/configureStore'
import { useNavigate } from 'react-router-dom'

export const Learned = () => {
    const userInfo = useSelector((state: RootState) => state.userInfo)
    const navigate = useNavigate()
    const addbutonClick = () => {
        navigate("/addlearn")
    }

    return (
        <>
            <NavBar />

            <div className='learn-container'>
                <div>
                    {userInfo.isMaster && (
                        <button className='add-learn-button' onClick={() => addbutonClick()}>
                            Add Learned
                        </button>)

                    }
                </div>
                <LearnedCard title="IOS" />
                <LearnedCard title="Android" />
                <LearnedCard title="Phaser" />
                <LearnedCard title="React" />

            </div>
        </>

    )
}

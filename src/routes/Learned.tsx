import React, { useEffect, useState } from 'react'
import { NavBar } from '../components/NavBar'
import { AboutCard } from '../components/AboutCard'
import { Learneds } from '../types/types'
import { FetchLearned, FetchProjects } from '../firebase/firebaseFetch'
import { useSelector } from 'react-redux'
import { RootState } from '../store/configureStore'
import { useNavigate } from 'react-router-dom'

export const Learned = () => {
    const [learnedData, setLearnedData] = useState<Learneds[]>([])
    const userInfo = useSelector((state: RootState) => state.userInfo)
    const navigate = useNavigate()
    useEffect(() => {
        async function fetchData() {
            const fetchLearnedData = await FetchLearned()
            setLearnedData(fetchLearnedData)
        }
        fetchData()
    }, [])

    const addbutonClick = () => {
        navigate("/addlearn")
    }

    return (
        <>
            <NavBar />
            {userInfo.isMaster && (
                <button className='add-learn-button' onClick={() => addbutonClick()}>
                    Add Learned
                </button>)

            }

            {learnedData.map((learnedItem, index) => (
                <AboutCard
                    key={learnedItem.id}
                    title={learnedItem.id}
                    hashtags={learnedItem.hashtags}
                    descr={learnedItem.descr}
                    imgurl={learnedItem.imgurl}
                    position={index % 2 === 0 ? 'left' : 'right'}
                />
            ))}
        </>
    )
}

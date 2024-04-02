import React, { useEffect, useState } from 'react'
import { NavBar } from '../components/NavBar'
import { AboutCard } from '../components/AboutCard'
import { Learneds } from '../types/types'
import { FetchLearned, FetchProjects } from '../firebase/firebaseFetch'

export const Learned = () => {
    const [learnedData, setLearnedData] = useState<Learneds[]>([])

    useEffect(() => {
        async function fetchData() {
            const fetchLearnedData = await FetchLearned()
            setLearnedData(fetchLearnedData)
        }
        fetchData()
    }, [])

    console.log("learned")

    return (
        <>
            <NavBar />
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

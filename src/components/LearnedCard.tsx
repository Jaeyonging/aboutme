import React, { useEffect, useState } from 'react';
import { AboutCard } from '../components/AboutCard';
import { Learneds } from '../types/types';
import { FetchLearned } from '../firebase/firebaseFetch';
import { IoIosArrowDropdown, IoIosArrowDropup } from "react-icons/io";

interface Props {
    title: string
}

export const LearnedCard = ({ title }: Props) => {
    const [learnedData, setLearnedData] = useState<Learneds[]>([])
    const [isOpen, setOpened] = useState(false)

    const toggleDetails = () => {
        setOpened(!isOpen);
    };

    useEffect(() => {
        async function fetchData() {
            const fetchLearnedData = await FetchLearned()
            setLearnedData(fetchLearnedData)
        }
        fetchData()
    }, [])

    const filteredLearnedData = learnedData.filter(item =>
        item.hashtags.some(tag => tag.toLowerCase().includes(title.toLowerCase()))
    );

    return (
        <div>
            <div className='learned-cards'>
                <div className='learned-topik' onClick={toggleDetails}>
                    {title}
                    {isOpen ? <IoIosArrowDropup className='dropdown-logo' /> : <IoIosArrowDropdown className='dropdown-logo' />}
                </div>
                <div className={`learned-content${isOpen ? ' open' : ''}`}>
                    {filteredLearnedData.map((learnedItem, index) => (
                        <AboutCard
                            key={learnedItem.id}
                            title={learnedItem.id}
                            hashtags={learnedItem.hashtags}
                            descr={learnedItem.descr}
                            imgurl={learnedItem.imgurl}
                            url={learnedItem.url}
                            pwd={learnedItem.pwd}
                            position={index % 2 === 0 ? 'left' : 'right'}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

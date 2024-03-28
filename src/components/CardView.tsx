import React, { useState, useEffect } from 'react';
import sampleData from "../data/sample.json";
import { Projects } from '../types/types';
import { CiPlay1 } from "react-icons/ci";
import { FetchProjects } from '../firebase/firebaseFetch';
import Lottie from 'lottie-react';
import PlayLogo from '../assets/lottie/playLogo.json'

export const CardView = () => {
    const [projects, setProjects] = useState<Projects[]>([]);
    const [filteredProjects, setFilteredProjects] = useState<Projects[]>([]); // 새로운 상태 추가

    useEffect(() => {
        async function fetchData() {
            const fetchedProjects = await FetchProjects();
            setProjects(fetchedProjects);
            setFilteredProjects(fetchedProjects);
        }
        fetchData();
    }, []);

    const filterProjectsByHashtag = (hashtag: string) => {
        if (hashtag.length == 0) {
            setFilteredProjects(projects)
            return
        }
        const filtered = projects.filter(project => project.hashtags.includes(hashtag));
        setFilteredProjects(filtered);
    };

    const imageOnClick = (gameurl: string) => {
        const url = gameurl.startsWith('http://') || gameurl.startsWith('https://') ? gameurl : `http://${gameurl}`;
        window.open(url, '_blank');
    };

    return (
        <div className='cardview-cont'>
            <div className='hashtag-buttons'>
                <button className='hashtag-button' onClick={() => filterProjectsByHashtag('')}>All</button>
                <button className='hashtag-button' onClick={() => filterProjectsByHashtag('#React')}>#React</button>
                <button className='hashtag-button' onClick={() => filterProjectsByHashtag('#Phaser')}>#Phaser</button>
                <button className='hashtag-button' onClick={() => filterProjectsByHashtag('#Game')}>#Game</button>
                <button className='hashtag-button' onClick={() => filterProjectsByHashtag('#Android')}>#Android</button>
                <button className='hashtag-button' onClick={() => filterProjectsByHashtag('#IOS')}>#IOS</button>
                <button className='hashtag-button' onClick={() => filterProjectsByHashtag('#Threejs')}>#ThreeJS</button>
            </div>
            <div className='cardview-projects'>
                {filteredProjects.map(project => (
                    <div className='cardview-item' key={project.id}>
                        <div className="image-container">
                            <img
                                className='cardview-thumb'
                                src={project.imgurl}
                                alt={project.id}
                                onClick={() => imageOnClick(project.gameurl)}
                            />
                            <div className="play-button-container">
                                <Lottie animationData={PlayLogo} className="play-button" onClick={() => imageOnClick(project.gameurl)} />
                            </div>
                        </div>
                        <div className='cardview-card'>
                            <div>Name: {project.id}</div>
                            <div>Password: {project.password}</div>
                            <div>Project: {project.project}</div>
                            <div>Date: {project.date}</div>
                            <div className='cardview-hashtags'>{project.hashtags.join(', ')}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

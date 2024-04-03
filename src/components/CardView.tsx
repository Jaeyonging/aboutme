import React, { useState, useEffect } from 'react';
import sampleData from "../data/sample.json";
import { Projects } from '../types/types';
import { CiPlay1 } from "react-icons/ci";
import { FetchProjects } from '../firebase/firebaseFetch';
import Lottie from 'lottie-react';
import PlayLogo from '../assets/lottie/playLogo.json';
import { useSelector } from 'react-redux';
import { RootState } from '../store/configureStore';
import { useNavigate } from 'react-router-dom';
import { RenderImg } from './RenderImg';

export const CardView = () => {
    const [projects, setProjects] = useState<Projects[]>([]);
    const [filteredProjects, setFilteredProjects] = useState<Projects[]>([]);
    const [searchItem, setSearchItem] = useState<string>('');
    const [showProjects, setShowProjects] = useState<boolean>(false);
    const userInfo = useSelector((state: RootState) => state.userInfo)
    const navigate = useNavigate()

    useEffect(() => {
        async function fetchData() {
            const fetchedProjects = await FetchProjects();
            setProjects(fetchedProjects);
            setFilteredProjects(fetchedProjects);
        }
        fetchData();


    }, []);

    useEffect(() => {
        setShowProjects(true);
    }, [filteredProjects]);

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchItem(event.target.value);
        const filtered = projects.filter(project =>
            project.hashtags.some(tag => tag.toLowerCase().includes(event.target.value.toLowerCase()))
        );
        setShowProjects(false)
        setFilteredProjects(filtered);
    };

    const filterProjectsByHashtag = (hashtag: string) => {

        if (hashtag.length === 0 && filteredProjects !== projects) {
            setShowProjects(false)
            setFilteredProjects(projects);
            return;
        }
        if (hashtag.length === 0) {
            setShowProjects(true)
            return
        }

        setShowProjects(false)
        const filtered = projects.filter(project => project.hashtags.includes(hashtag));
        setFilteredProjects(filtered);
    };

    const imageOnClick = (gameurl: string) => {
        const url = gameurl.startsWith('http://') || gameurl.startsWith('https://') ? gameurl : `http://${gameurl}`;
        window.open(url, '_blank');
    };



    return (
        <div className='cardview-cont'>
            <div className='search-container'>
                <input
                    type="text"
                    placeholder="Search hashtags..."
                    value={searchItem}
                    onChange={handleSearch}
                    className='search-input'
                />
                {userInfo.isMaster && (
                    <>
                        <button className='add-button' onClick={() => { navigate("/addproject") }}>
                            Upload Project
                        </button>
                    </>)}
            </div>

            <div className='hashtag-buttons'>
                <button className='hashtag-button' onClick={() => filterProjectsByHashtag('')}>All</button>
                <button className='hashtag-button' onClick={() => filterProjectsByHashtag('#React')}>#React</button>
                <button className='hashtag-button' onClick={() => filterProjectsByHashtag('#Phaser')}>#Phaser</button>
                <button className='hashtag-button' onClick={() => filterProjectsByHashtag('#Android')}>#Android</button>
                <button className='hashtag-button' onClick={() => filterProjectsByHashtag('#IOS')}>#IOS</button>
                <button className='hashtag-button' onClick={() => filterProjectsByHashtag('#Three.js')}>#ThreeJS</button>
                <button className='hashtag-button' onClick={() => filterProjectsByHashtag('#키즈한글')}>#키즈한글</button>
                <button className='hashtag-button' onClick={() => filterProjectsByHashtag('#다비수키즈')}>#다비수키즈</button>
                <button className='hashtag-button' onClick={() => filterProjectsByHashtag('#다비수구구단')}>#다비수구구단</button>
                <button className='hashtag-button' onClick={() => filterProjectsByHashtag('#케이글')}>#케이글</button>
            </div>
            <div className='project-number'>
                {filteredProjects.length} / {projects.length}
            </div>
            <div className='cardview-projects'>
                {filteredProjects.map(project => (
                    <div className={`cardview-item ${showProjects ? 'show' : ''}`} key={project.id}>
                        <div className="image-container">
                            <RenderImg
                                className='cardview-thumb'
                                imgurl={project.imgurl}
                                onClick={() => imageOnClick(project.gameurl)}
                            />
                            <div className="play-button-container">
                                <Lottie animationData={PlayLogo} className="play-button" onClick={() => imageOnClick(project.gameurl)} />
                            </div>
                        </div>
                        <div className='cardview-card'>
                            <div className='card-title'>Name: <span className='card-thumb'>{project.id}</span></div>
                            <div className='card-title'>Password:<span className='card-thumb'>{project.password}</span></div>
                            <div className='card-title'>Project: <span className='card-thumb'>{project.project}</span></div>
                            <div className='card-title'>Date: <span className='card-thumb'>{project.date}</span></div>
                            <div className='cardview-hashtags'>{project.hashtags.join(', ')}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

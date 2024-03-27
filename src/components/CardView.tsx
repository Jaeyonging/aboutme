import React, { useState, useEffect } from 'react';
import sampleData from "../data/sample.json";
import { Projects } from '../types/example';
import { CiPlay1 } from "react-icons/ci";
import { FetchProjects } from '../firebase/firebaseFetch';

export const CardView = () => {
    const [projects, setProjects] = useState<Projects[]>([]);

    useEffect(() => {
        async function fetchData() {
            setProjects(await FetchProjects());
        }

        fetchData();
    }, []);


    const imageOnCick = (gameurl: string) => {
        console.log(gameurl)
        const url = gameurl.startsWith('http://') || gameurl.startsWith('https://') ? gameurl : `http://${gameurl}`;
        window.open(url, '_blank');
    }

    return (
        <div className='cardview-cont'>
            {Object.entries(projects).map(([index, project]) => (
                <div className='cardview-item' key={project.id}>
                    <div className="image-container">
                        <img onMouseOver={(e) => {
                            const target = e.target as HTMLImageElement;
                            // console.log(target.alt);
                        }} className='cardview-thumb' src={project.imgurl} alt={project.id} onClick={() => imageOnCick(project.gameurl)} />
                        <div className="play-button-container">
                            <CiPlay1 className="play-button" onClick={() => imageOnCick(project.gameurl)}></CiPlay1>
                        </div>
                    </div>
                    <div className='cardview-card'>

                        <div>
                            Name: {project.id}
                        </div>
                        <div>
                            Password: {project.password}
                        </div>
                        <div>
                            Project: {project.project}
                        </div>
                        <div>
                            Date: {project.date}
                        </div>
                        <div className='cardview-hashtags'>
                            {project.hashtags.join(', ')}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

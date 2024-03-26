import React, { useState, useEffect } from 'react';
import sampleData from "../data/sample.json";
import { Project, Projects } from '../types/example';
import { CiPlay1 } from "react-icons/ci";
import { db } from '../firebase/firebase';
import { collection, query, where, getDocs } from "firebase/firestore";
import { FetchProjects } from '../firebase/firebaseFetch';

export const CardView = () => {
    const q = query(collection(db, "projects"));
    const [projects, setProjects] = useState<Projects[]>([]);

    useEffect(() => {
        async function fetchData() {
            setProjects(await FetchProjects());
        }

        fetchData();
    }, []);

    console.log(projects)

    const imageOnCick = (gameurl: string) => {
        console.log(gameurl)
        const url = gameurl.startsWith('http://') || gameurl.startsWith('https://') ? gameurl : `http://${gameurl}`;
        window.open(url, '_blank');
    }

    return (
        <div className='cardview-cont'>
            {Object.entries(projects).map(([index, project]) => (
                <div className='cardview-item' key={index}>
                    <div className="image-container">
                        <img className='cardview-thumb' src={project.imgurl} alt={index} onClick={() => imageOnCick(project.gameurl)} />
                        <div className="play-button-container">
                            <CiPlay1 className="play-button" onClick={() => imageOnCick(project.gameurl)}></CiPlay1>
                        </div>
                    </div>
                    <div>
                        Name: {project.id}
                    </div>
                    <div>
                        Projects: {project.project}
                    </div>
                    <div>
                        Date: {project.date}
                    </div>
                    <div className='cardview-hashtags'>
                        Hashtags: {project.hashtags.join(', ')}
                    </div>
                </div>
            ))}
        </div>
    );
};

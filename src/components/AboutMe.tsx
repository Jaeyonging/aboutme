import React, { useEffect, useState } from 'react';
import { AboutMap } from '../types/types';
import { RenderText } from './RenderText';
import { useNavigate } from 'react-router-dom';

export const AboutMe = ({ title }: { title: string }) => {
    const [fade, setFade] = useState('');
    const [description, setDescription] = useState<string[]>([]);
    const navigate = useNavigate()
    useEffect(() => {
        setTimeout(() => {
            setFade('end');
        }, 100);

        setDescription(AboutMap.get(title) || []);

        return () => {
            setFade('');
        };
    }, [title]);

    return (
        <>
            <div className={'aboutme ' + fade}>
                <div className='aboutme-title'>{title}</div>
                {title === "TMI" && <div className='tmi-semi' onClick={() => navigate("/mbti")}>Curious about my personality?</div>
                }
                {description.map((item, index) => (

                    <RenderText key={index} >
                        {item}
                    </RenderText>
                ))}
            </div>
        </>
    );
};

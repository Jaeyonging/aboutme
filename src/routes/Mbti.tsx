import React, { useEffect, useState } from 'react'
import { RenderText } from '../components/RenderText';
import { NavBar } from '../components/NavBar';
import { AboutMap } from '../types/types';

export const Mbti = () => {
    const [fade, setFade] = useState('');
    const [description, setDescription] = useState<string[]>([]);
    useEffect(() => {
        setTimeout(() => {
            setFade('end');
        }, 100);

        setDescription(AboutMap.get("myself") || []);

        return () => {
            setFade('');
        };
    }, []);

    return (
        <>
            <NavBar />
            <div className={'aboutme ' + fade}>
                <div className='aboutme-title'>My Self</div>
                {description.map((item, index) => (
                    <RenderText key={index} >
                        {item}
                    </RenderText>
                ))}
            </div>
        </>
    );
};

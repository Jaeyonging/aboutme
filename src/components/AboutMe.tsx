import React, { useEffect, useState } from 'react';
import { AboutMap } from '../types/types';
import { RenderText } from './RenderText';

export const AboutMe = ({ title }: { title: string }) => {
    const [fade, setFade] = useState('');
    const [description, setDescription] = useState<string[]>([]);

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
                {description.map((item, index) => (
                    <RenderText key={index} >
                        {item}
                    </RenderText>
                ))}
            </div>
        </>
    );
};

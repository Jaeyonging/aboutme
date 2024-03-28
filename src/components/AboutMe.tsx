import React, { useEffect, useState } from 'react';
import { AboutMap } from '../types/types';

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

    const renderBoldText = (item: string) => {
        const boldIndexStart = item.indexOf('**');
        const boldIndexEnd = item.indexOf('**', boldIndexStart + 2);

        if (boldIndexStart !== -1 && boldIndexEnd !== -1) {
            const boldText = item.substring(boldIndexStart + 2, boldIndexEnd);
            return (
                <>
                    {item.substring(0, boldIndexStart)}
                    <span className="bold-text">{boldText}</span>
                    {item.substring(boldIndexEnd + 2)}
                </>
            );
        }

        return item;
    };

    return (
        <>
            <div className={'aboutme ' + fade}>
                <div className='aboutme-title'>{title}</div>
                {description.map((item, index) => (
                    <div key={index} className='aboutme-descr'>
                        {renderBoldText(item)}
                    </div>
                ))}
            </div>
        </>
    );
};

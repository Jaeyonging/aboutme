import React, { useEffect, useState } from 'react';
import { RenderText } from './RenderText';
import { RenderImg } from './RenderImg';

interface Props {
    title: string;
    hashtags: string[];
    descr: string;
    imgurl: string;
    position: string;
    url: string;
    pwd?: string;
}

export const AboutCard = ({ imgurl, title, hashtags, descr, position, url, pwd }: Props) => {
    const [cardPosition, setCardPosition] = useState("");
    console.log(url)
    useEffect(() => {
        if (position === "right") {
            setCardPosition("learned-rightcont");
        } else {
            setCardPosition("learned-leftcont");
        }
    }, [position]);

    return (
        <div className={`${cardPosition}`}>
            <div className="learned-card">
                <RenderImg imgurl={imgurl} className='learned-img-rounded'></RenderImg>
                <a href={url}>
                    {url && "Link"}
                </a>
                <div>
                    {pwd && "pwd : " + pwd}
                </div>
                <div className='learned-sum'>
                    <div className='learned-title'>
                        {title}
                    </div>
                    <div className='learned-hash'>
                        {hashtags.join(', ')}
                    </div>
                    <div className='learned-descr'>
                        <RenderText>{descr}</RenderText>
                    </div>
                </div>
            </div>
        </div>
    );
};

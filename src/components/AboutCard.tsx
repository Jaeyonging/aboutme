import React, { useEffect, useState } from 'react';
import Lottie from 'lottie-react';
import loadingAnimation from '../assets/lottie/android.json'; // 로딩 애니메이션 파일 경로
import { RenderText } from './RenderText';

interface Props {
    title: string;
    hashtags: string[];
    descr: string;
    imgurl: string;
    position: string;
}

export const AboutCard = ({ imgurl, title, hashtags, descr, position }: Props) => {
    const [cardPosition, setCardPosition] = useState("");
    const [imageSrc, setImageSrc] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (position === "right") {
            setCardPosition("learned-rightcont");
        } else {
            setCardPosition("learned-leftcont");
        }

        const image = new Image();
        image.src = imgurl;
        image.onload = () => {
            setImageSrc(imgurl);
            setIsLoading(false);
        };
        image.onerror = () => {
            setImageSrc('./me.png'); // 이미지 로딩 실패 시 대체 이미지로 설정
            setIsLoading(false);
        };
    }, []);

    return (
        <>
            <div className={cardPosition}>
                <div className='learned-card'>
                    {isLoading ? (
                        <Lottie animationData={loadingAnimation} />
                    ) : (
                        <img className="learned-img" src={imageSrc} />
                    )}
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
        </>
    );
};

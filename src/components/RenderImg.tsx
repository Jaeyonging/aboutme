import Lottie from 'lottie-react';
import React, { useEffect, useState } from 'react'
import loadingAnimation from '../assets/lottie/loading.json';

interface Props {
    className?: string
    onClick?: () => void
    imgurl: string
}

export const RenderImg = ({ imgurl, onClick, className = "learned-img" }: Props) => {
    const [imageSrc, setImageSrc] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const image = new Image();
        image.src = imgurl;
        image.onload = () => {
            setImageSrc(imgurl);
            setIsLoading(false);
        };
        image.onerror = () => {
            setImageSrc('./noimg.jpeg');
            setIsLoading(false);
        };
    }, [])
    return (
        <>
            {isLoading ? (
                <Lottie className={className} animationData={loadingAnimation} />
            ) : (
                <img className={className} src={imageSrc} onClick={onClick} />
            )}
        </>
    )
}

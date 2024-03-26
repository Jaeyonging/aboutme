import React, { useEffect, useRef } from 'react';

const FallingStar = () => {
    const starsContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const starsContainer = starsContainerRef.current;

        if (starsContainer) {
            const screenHeight = window.innerHeight;
            const speed = 3;

            const createStar = () => {
                const star = document.createElement('div');
                star.classList.add('star');
                star.style.left = `${Math.random() * 100}%`;
                starsContainer.appendChild(star);
                animateStar(star);
            };

            const animateStar = (star: HTMLDivElement) => {
                let currentPosition = 0;
                const animationId = setInterval(() => {
                    currentPosition += speed;
                    if (currentPosition > screenHeight) {
                        clearInterval(animationId);
                        starsContainer.removeChild(star);
                    } else {
                        star.style.top = `${currentPosition}px`;
                    }
                }, 50);
            };

            const intervalId = setInterval(createStar, 1000);
            return () => clearInterval(intervalId);
        }
    }, []);

    return (
        <div ref={starsContainerRef} className="stars-container"></div>
    );
};

export default FallingStar;

import React from 'react'

export const RenderText = ({ children }: { children: string }) => {

    const renderBoldText = (item: string) => {
        let result = [];
        let currentIndex = 0;
        let boldIndexStart = item.indexOf('**');
        let keyIndex = 0;

        while (boldIndexStart !== -1) {
            result.push(<span key={keyIndex++}>{item.substring(currentIndex, boldIndexStart)}</span>);

            const boldIndexEnd = item.indexOf('**', boldIndexStart + 2);

            if (boldIndexEnd !== -1) {
                const boldText = item.substring(boldIndexStart + 2, boldIndexEnd);
                result.push(<span key={keyIndex++} className="bold-text">{boldText}</span>);
                currentIndex = boldIndexEnd + 2;
                boldIndexStart = item.indexOf('**', currentIndex);
            } else {
                result.push(<span key={keyIndex++}>{item.substring(boldIndexStart)}</span>);
                break;
            }
        }

        if (currentIndex < item.length) {
            result.push(<span key={keyIndex++}>{item.substring(currentIndex)}</span>);
        }

        return result;
    };




    return (
        <div className='aboutme-descr'>
            {renderBoldText(children)}
        </div>
    )
}

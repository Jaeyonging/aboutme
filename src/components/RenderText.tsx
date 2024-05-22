export const RenderText = ({ children }: { children: string }) => {

    const renderBoldText = (item: string, lineIndex: number) => {
        let result = [];
        let currentIndex = 0;
        let boldIndexStart = item.indexOf('**');
        let keyIndex = 0;

        while (boldIndexStart !== -1) {
            result.push(<span key={`bold_${lineIndex}_${boldIndexStart}_${boldIndexStart + 2}_${keyIndex}`}>{item.substring(currentIndex, boldIndexStart)}</span>);

            const boldIndexEnd = item.indexOf('**', boldIndexStart + 2);

            if (boldIndexEnd !== -1) {
                const boldText = item.substring(boldIndexStart + 2, boldIndexEnd);
                result.push(<span key={`bold_${lineIndex}_${boldIndexStart}_${boldIndexEnd}_${keyIndex}`} className="bold-text">{boldText}</span>);
                currentIndex = boldIndexEnd + 2;
                boldIndexStart = item.indexOf('**', currentIndex);
            } else {
                result.push(<span key={`bold_${lineIndex}_${boldIndexStart}_${boldIndexStart + 2}_${keyIndex}`}>{item.substring(boldIndexStart)}</span>);
                break;
            }
            keyIndex++;
        }

        if (currentIndex < item.length) {
            result.push(<span key={`bold_${lineIndex}_${currentIndex}_${currentIndex + 2}_${keyIndex}`}>{item.substring(currentIndex)}</span>);
        }

        return result;
    };

    const renderImage = (imgurl: string, key: string) => {
        return <img key={key} src={imgurl} alt="dynamic content" />;
    };

    const renderTextWithLineBreaks = (text: string) => {
        const lines = text.split('(nxtln)');
        const elements: JSX.Element[] = [];

        lines.forEach((line, index) => {
            const parts = line.split(/(\*img [^\*]+\*)/);
            parts.forEach((part, partIndex) => {
                if (part.startsWith('*img ') && part.endsWith('*')) {
                    const imageUrl = part.slice(5, -1).trim();
                    elements.push(renderImage(imageUrl, `img_${index}_${partIndex}`));
                } else {
                    elements.push(...renderBoldText(part, index));
                }
            });
            if (index < lines.length - 1) {
                elements.push(<br key={`br_${index}`} />);
            }
        });

        return elements;
    };

    return (
        <div className='aboutme-descr'>
            {renderTextWithLineBreaks(children)}
        </div>
    );
};

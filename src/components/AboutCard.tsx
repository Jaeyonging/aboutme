import React, { useEffect, useState } from 'react'

interface Props {
    title: string,
    hashtags: string[],
    descr: string,
    imgurl: string
    position: string
}

export const AboutCard = ({ imgurl, title, hashtags, descr, position }: Props) => {
    const [cardPosition, setCardPosition] = useState("")
    useEffect(() => {
        if (position == "right") {
            setCardPosition("learned-rightcont")
        } else {
            console.log("left")
            setCardPosition("learned-leftcont")
        }
    }, [])
    return (
        <>
            <div className={cardPosition}>
                <div className='learned-card'>
                    <img className="learned-img" src={imgurl} />
                    <div className='learned-sum'>
                        <div className='learned-title'>
                            {title}
                        </div>
                        <div className='learned-hash'>
                            {hashtags.join(', ')}
                        </div>
                        <div className='learned-descr'>
                            {descr}
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

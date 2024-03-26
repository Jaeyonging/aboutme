import Lottie from 'lottie-react'
import React, { ReactNode } from 'react'

interface Props {
  lottieStyle?: React.CSSProperties;
  animationData: any
  children?: ReactNode
}

export const Skill = ({ lottieStyle, animationData, children }: Props) => {
  return (
    <div>
      <Lottie style={lottieStyle} animationData={animationData}></Lottie>
      {children}
    </div>
  )
}

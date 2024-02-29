import React, { useRef, useState } from 'react'
import useMousePosition from '../../hooks/useMousePosition'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import useScreenSize from '../../hooks/useScreenSize'
const Card: React.FC<{
  imgSrc: string
  title: string
  subTitle: string
  description: string
  index: number
  moveValue: number
}> = ({ imgSrc, title, subTitle, description, index, moveValue }) => {
  const { width } = useScreenSize()
  const [isExpand, setIsExpand] = useState(false)
  const cardContainerRef = useRef<HTMLDivElement>(null)
  const cardRef = useRef<HTMLDivElement>(null)

  const cardClicked = () => {
    if (width < 750) {
      return
    }
    setIsExpand((isExpanded) => !isExpanded)
    if (cardContainerRef.current) {
      cardContainerRef.current?.classList.toggle('open')
    }
  }

  return (
    <div ref={cardContainerRef} className={`card-container`}>
      <div className="content">
        <div className="avatar">
          <img src={imgSrc} />
        </div>
        <header>{title}</header>
      </div>
    </div>
  )
}

export default Card

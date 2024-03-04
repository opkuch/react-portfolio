import { useEffect, useRef } from 'react'
import TouchIcon from './TouchIcon'

const TouchIconAnimated = ({ theme }: { theme: string }) => {
  const pathRef = useRef<HTMLDivElement | null>(null)
  const handRef = useRef<SVGElement | null>(null)

  useEffect(() => {
    if (pathRef.current) {
      pathRef.current.style.animation = 'swipe-dot 2s 0.5s infinite'
    }
    if (handRef.current) {
      handRef.current.style.animation = 'swipe-hand 2s infinite'
    }
  }, [pathRef.current, handRef.current])
  return (
    <div className={`swipe`}>
      <div ref={pathRef} className="path"></div>
      <TouchIcon fillColor={theme === 'light' ? '#000' : '#fff'} />
    </div>
  )
}

export default TouchIconAnimated

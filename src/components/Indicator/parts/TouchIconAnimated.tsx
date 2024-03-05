import { useEffect, useRef } from 'react'
import TouchIcon from './TouchIcon'
import { Text } from '../../Text/Text'

const TouchIconAnimated = ({ theme }: { theme: string }) => {
  const handRef = useRef<SVGElement | null>(null)

  useEffect(() => {
    if (handRef.current) {
      handRef.current.style.animation = 'swipe-hand 2s infinite'
    }
  }, [handRef.current])
  return (
    <div className={`swipe`}>
      <Text type="regular" size="small" display="inline" classNames='swipe-text'>
        SWIPE
      </Text>
      <TouchIcon fillColor={theme === 'light' ? '#000' : '#fff'} />
    </div>
  )
}

export default TouchIconAnimated

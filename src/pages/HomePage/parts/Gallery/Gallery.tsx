import { useEffect, useRef, useState } from 'react'
import { projectsData } from '../../../../data/projects.data'
import GalleryItem from '../GalleryItem/GalleryItem'
import { useGalleryAnimation } from '../../../../hooks/useGalleryAnimation'
import useScreenSize from '../../../../hooks/useScreenSize'
import { useTouchDevice } from '../../../../hooks/useTouchDevice'
import { useSwipe } from '../../../../hooks/useSwipe'

const Gallery = () => {
  const [counter, setCounter] = useState(0)
  const [trigger, setTrigger] = useState(true)
  const { width } = useScreenSize()
  const galleryRef = useRef<HTMLUListElement | null>(null)
  const [lastIndex, setLastIndex] = useState(0)
  const [currentItems, setCurrentItems] = useState<any[]>(projectsData)
  const isTouchDevice = useTouchDevice()
  const [limit, setLimit] = useState(currentItems.length)
  const { isRightSwipe } = useSwipe({ el: galleryRef.current })
  const scope = useGalleryAnimation(trigger, isRightSwipe.isRightSwipe)

  useEffect(() => {    
    if (isTouchDevice) {
      if (isRightSwipe.isRightSwipe) {
        setCounter((last) => Math.abs(last) + 1)
      } else {
        setCounter((last) => 0 - Math.abs(last) - 1)
      }
    }
  }, [isRightSwipe])

  useEffect(() => {
    if (counter < 0 && lastIndex === 0) {
      setLastIndex(projectsData.length - limit)
    }
    if (counter < 0 && lastIndex >= limit) {
      setLastIndex((last) => last - limit)
    } else if (counter > 0 && lastIndex < projectsData.length - limit) {
      setLastIndex((last) => last + limit)
    } else if (counter > 0 && lastIndex >= projectsData.length - limit) {
      setLastIndex(0)
    }
    setTrigger((last) => !last)
  }, [counter, limit])

  useEffect(() => {
    const sliceItems = () => {
      const sliced = projectsData.slice(lastIndex, lastIndex + limit)
      setCurrentItems(sliced)
    }
    const timeoutId = setTimeout(sliceItems, 700)
    return () => {
      return clearTimeout(timeoutId)
    }
  }, [lastIndex, limit])

  const runSetLimit = (width: number) => {
    if (width < 700) {
      setLimit(1)
    } 
    setLastIndex(0)
  }

  useEffect(() => {
    runSetLimit(width)
  }, [width])
  return (
    <section className="gallery-container" ref={scope}>
      <ul ref={galleryRef} className="gallery-list">
        {currentItems.map((project, idx) => {
          return <GalleryItem key={project.id + idx} project={project} translateFrom={isRightSwipe.isRightSwipe? "right" : 'left'}/>
        })}
      </ul>
    </section>
  )
}

export default Gallery

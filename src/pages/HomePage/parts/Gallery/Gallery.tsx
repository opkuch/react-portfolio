import { useCallback, useEffect, useRef, useState } from 'react'
import { projectsData } from '../../../../data/projects.data'
import GalleryItem from '../GalleryItem/GalleryItem'
import { useGalleryAnimation } from '../../../../hooks/useGalleryAnimation'
import { debounce } from '../../../../services/utilService'
import useScreenSize from '../../../../hooks/useScreenSize'
import { useTouchDevice } from '../../../../hooks/useTouchDevice'
import { useSwipe } from '../../../../hooks/useSwipe'

const Gallery = () => {
  const [counter, setCounter] = useState(0)
  const [trigger, setTrigger] = useState(true)
  const [limit, setLimit] = useState(3)
  const { width } = useScreenSize()
  const galleryRef = useRef<HTMLUListElement | null>(null)
  const [lastIndex, setLastIndex] = useState(0)
  const [currentItems, setCurrentItems] = useState<any[]>(projectsData)
  const scope = useGalleryAnimation(trigger)
  const isTouchDevice = useTouchDevice()
  const { isRightSwipe } = useSwipe({ el: galleryRef.current })

  const handleScroll = useCallback((e: WheelEvent) => {
    if (e.deltaY < 0) {
      setCounter((last) => Math.abs(last) + 1)
    } else {
      setCounter((last) => 0 - Math.abs(last) - 1)
    }
  }, [])
  const handleKey = useCallback((e: KeyboardEvent) => {
    if (e.code === 'ArrowRight') {
      setCounter((last) => Math.abs(last) + 1)
    } else if (e.code === 'ArrowLeft') {
      setCounter((last) => 0 - Math.abs(last) - 1)
    }
  }, [])

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
    document.addEventListener('wheel', debounce(handleScroll, 700))
    document.addEventListener('keydown', debounce(handleKey, 500))

    return () => {
      document.removeEventListener('wheel', () => null)
      document.removeEventListener('keydown', () => null)
    }
  }, [])

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
    setTimeout(sliceItems, 700)
  }, [lastIndex, limit])

  const runSetLimit = (width: number) => {
    if (width < 700) {
      setLimit(1)
    } else if (width < 1280) {
      setLimit(3)
    } else {
      setLimit(3)
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
          return <GalleryItem key={project.id + idx} project={project} />
        })}
      </ul>
    </section>
  )
}

export default Gallery

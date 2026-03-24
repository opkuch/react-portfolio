import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
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
  const [galleryEl, setGalleryEl] = useState<HTMLUListElement | null>(null)
  const galleryCallbackRef = useCallback((node: HTMLUListElement | null) => {
    galleryRef.current = node
    setGalleryEl(node)
  }, [])
  const [lastIndex, setLastIndex] = useState(0)
  const [currentItems, setCurrentItems] = useState<any[]>(projectsData)
  const isTouchDevice = useTouchDevice()
  const limit = useMemo(() => (width < 700 ? 1 : projectsData.length), [width])
  const { isRightSwipe } = useSwipe({ el: galleryEl })
  const { scope, isEnter } = useGalleryAnimation(
    trigger,
    isRightSwipe.isRightSwipe
  )

  useEffect(() => {
    if (isEnter && galleryRef.current) {
      galleryRef.current.style.visibility = 'visible'
    }
  }, [isEnter])

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

  useEffect(() => {
    setLastIndex(0)
  }, [width])
  return (
    <section className="gallery-container" ref={scope}>
      <ul ref={galleryCallbackRef} className="gallery-list" style={{ visibility: 'hidden' }}>
        {currentItems.map((project, idx) => {
          return (
            <GalleryItem
              key={project.id + idx}
              project={project}
              translateFrom={isRightSwipe.isRightSwipe ? 'right' : 'left'}
            />
          )
        })}
      </ul>
    </section>
  )
}

export default Gallery

import React, { useCallback, useEffect, useRef, useState } from 'react'
import { projectsData } from '../../../../data/projects'
import GalleryItem from '../GalleryItem/GalleryItem'
import { useGalleryAnimation } from '../../../../hooks/useGalleryAnimation'
import { debounce } from '../../../../services/utilService'
import useScreenSize from '../../../../hooks/useScreenSize'

const GridGallery = () => {
  const [counter, setCounter] = useState(0)
  const [trigger, setTrigger] = useState(true)
  const [limit, setLimit] = useState(2)
  const { width } = useScreenSize()

  const [lastIndex, setLastIndex] = useState(0)
  const [currentItems, setCurrentItems] = useState<any[]>(projectsData)
  const scope = useGalleryAnimation(trigger)
  const handleScroll = useCallback((e: WheelEvent ) => {
    if (e.deltaY < 0) {
      setCounter((last) => Math.abs(last) + 1)
    } else {
      setCounter((last) => 0 - Math.abs(last) - 1)
    }
  }, [])
  const handleKey = useCallback((e: KeyboardEvent ) => {
    if (e.code === 'ArrowRight') {
      setCounter((last) => Math.abs(last) + 1)
    } else if (e.code === 'ArrowLeft') {
      setCounter((last) => 0 - Math.abs(last) - 1)
    }
  }, [])
  useEffect(() => {
    document.addEventListener('wheel', debounce(handleScroll, 550))
    document.addEventListener('keydown', debounce(handleKey, 550))

    return () => {
      document.removeEventListener('wheel', () => null)
      document.removeEventListener('keydown', () => null)
    }
  }, [])
  useEffect(() => {
    if (counter < 0 && lastIndex >= limit) {
      setLastIndex((last) => last - limit)
      setTrigger((last) => !last)
    } else if (counter > 0 && lastIndex < projectsData.length - limit) {
      setLastIndex((last) => last + limit)
      setTrigger((last) => !last)
    } else if (counter > 0 && lastIndex >= projectsData.length - limit) {
      setLastIndex(projectsData.length - limit)
    }
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
      setLimit(2)
    } else {
      setLimit(2)
    }
    setLastIndex(0)
  }

  useEffect(() => {
    runSetLimit(width)
  }, [width])
  return (
    <section className='gallery-container' ref={scope}>
      <ul className="gallery-list">
        {currentItems.map((project, idx) => {
          return <GalleryItem key={project.id + idx} project={project} />
        })}
      </ul>
    </section>
  )
}

export default GridGallery

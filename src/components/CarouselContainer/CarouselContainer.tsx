import React, { ReactElement, useEffect, useState } from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.css'
import CarouselIndicator from '../CarouselIndicator/CarouselIndicator'
import Arrow from '../CarouselIndicator/components/Arrow/Arrow'
const CarouselContainer: React.FC<{ children: ReactElement[] }> = ({
  children,
}) => {
  const [slides, setSlides] = useState<ReactElement[]>(children)
  const [currentSlide, setCurrentSlide] = useState(0)
  function throttled(delay: number, fn: Function) {
    let lastCall = 0
    return function wrapper(e: WheelEvent) {
      const now = new Date().getTime()
      if (now - lastCall < delay) {
        return
      }
      lastCall = now
      return fn(e)
    }
  }

  function callback(e: WheelEvent) {
    if (e.deltaY < 0) {
      prev()
    } else {
      next()
    }
  }
  useEffect(() => {
    const myThrottledFunc = throttled(2000, callback)
    window?.addEventListener('wheel', myThrottledFunc)
  }, [])
  const config = {
    showArrows: false,
    showStatus: false,
    showIndicators: true,
    infiniteLoop: false,
    showThumbs: false,
    useKeyboardArrows: true,
    autoPlay: false,
    stopOnHover: false,
    swipeable: true,
    emulateTouch: true,
    autoFocus: false,
    thumbWidth: 100,
    interval: 2000,
    transitionTime: 2000,
    ariaLabel: 'ariaLabel',
    selectedItem: currentSlide,
  }

  const next = () => {
    setCurrentSlide((prevSlide) => prevSlide + 1)
  }
  const prev = () => {
    setCurrentSlide((prevSlide) => prevSlide - 1)
  }

  const test = (
    _: (
      e: React.MouseEvent<Element, MouseEvent> | React.KeyboardEvent<Element>
    ) => void,
    isSelected: boolean,
    index: number,
    label: string
  ) => {
    if (index === 4) {
      return (
        <>
          <CarouselIndicator
            index={index}
            isSelected={isSelected}
            currentSlide={currentSlide}
          />
          <Arrow isSelected={isSelected} />
        </>
      )
    }
    return (
      <CarouselIndicator
        index={index}
        isSelected={isSelected}
        currentSlide={currentSlide}
      />
    )
  }

  const t = (idx: number, item: any) => {
    console.log(item)
  }

  return (
    <Carousel
      className="projects-carousel"
      renderIndicator={test}
      axis="vertical"
      {...config}
      width={'100%'}
    >
      {slides}
    </Carousel>
  )
}

export default CarouselContainer

import React, { useEffect, useState } from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.css'
import CarouselIndicator from '../CarouselIndicator/CarouselIndicator'
import Arrow from '../CarouselIndicator/components/Arrow/Arrow'
import LandingPage from '../../slides/LandingPage/LandingPage'
import TechnologyPage from '../../slides/TechnologyPage/TechnologyPage'
import ResumePage from '../../slides/ResumePage/ResumePage'
import useScreenSize from '../../hooks/useScreenSize'
const CarouselContainer: React.FC<{}> = ({}) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const { width } = useScreenSize()
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
    swipeable: width <= 700,
    emulateTouch: true,
    autoFocus: false,
    thumbWidth: 100,
    interval: 2000,
    transitionTime: 2000,
    ariaLabel: 'ariaLabel',
    selectedItem: currentSlide,
  }

  const next = () => {
    setCurrentSlide((prevSlide) => {
      if (prevSlide + 1 >= 2) {
        return 2
      } else {
        return prevSlide + 1
      }
    })
  }
  const prev = () => {
    setCurrentSlide((prevSlide) => {
      if (prevSlide - 1 <= 0) return 0

      if (prevSlide - 1 === 2) {
      } else {
      }
      return prevSlide - 1
    })
  }

  const test = (
    onClickFunc: (
      e: React.MouseEvent<Element, MouseEvent> | React.KeyboardEvent<Element>
    ) => void,
    isSelected: boolean,
    index: number
  ) => {
    if (index === 2) {
      return (
        <>
          <CarouselIndicator
            index={index}
            isSelected={isSelected}
            currentSlide={currentSlide}
            onClick={onClickFunc}
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
        onClick={onClickFunc}
      />
    )
  }

  const animationHandler = () => {
    
    return {}
  }

  return (
    <Carousel
      className="projects-carousel"
      renderIndicator={test}
      axis="vertical"
      {...config}
      width={'100%'}
      onChange={(index) => setCurrentSlide(index)}
      preventMovementUntilSwipeScrollTolerance={false}
      swipeScrollTolerance={100}
      swipeAnimationHandler={animationHandler}
    >
      <LandingPage inView={currentSlide === 0} />
      <TechnologyPage inView={currentSlide === 1} />
      <ResumePage inView={currentSlide === 2} />
    </Carousel>
  )
}

export default CarouselContainer

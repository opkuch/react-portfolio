import React from 'react'

const CarouselIndicator: React.FC<{
  isSelected: boolean
  index: number
  currentSlide: number
  onClick: (
    e: React.MouseEvent<Element, MouseEvent> | React.KeyboardEvent<Element>
  ) => void
}> = ({ isSelected, index, currentSlide, onClick }) => {
  return (
    <div
      className={`indicator ${
        (isSelected || index <= currentSlide) && 'selected'
      }`}
      onClick={onClick}
    ></div>
  )
}

export default CarouselIndicator

import React from 'react'

const CarouselIndicator: React.FC<{
  isSelected: boolean
  index: number
  currentSlide: number
}> = ({ isSelected, index, currentSlide }) => {
  return (
    <div
      className={`indicator ${
       ( isSelected || index <= currentSlide) && 'selected'
      }`}
    ></div>
  )
}

export default CarouselIndicator

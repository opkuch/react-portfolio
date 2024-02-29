import React, { useRef } from 'react'

const GalleryItem: React.FC<{ project: any }> = ({ project }) => {
  const ref = useRef(null)

  return (
      <li className='gallery-item' ref={ref}>
        <img className='image-filter' src={project.imgsURL[0]} />
      </li>
  )
}

export default GalleryItem

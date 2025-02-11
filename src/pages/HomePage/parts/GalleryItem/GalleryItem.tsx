import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'

const GalleryItem: React.FC<{ project: any, translateFrom: 'left' | 'right' }> = ({ project, translateFrom }) => {
  const ref = useRef(null)
  const [isHover, setIsHover] = useState(false)
  return (
    <li
      className={`gallery-item ${translateFrom}`}
      style={{transform: translateFrom === 'left'? 'translateX(75px)' : 'translateX(-75px)'}}
      ref={ref}
      data-link-hover={true}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <Link to={`/project/${project.id}`}>
        <div
          className={`window ${
            isHover ? 'down-leave-active' : 'down-enter-active'
          }`}
        >
          {project.title}
        </div>
        <img className="image-filter" src={project.imgsURL[0]} />
      </Link>
    </li>
  )
}

export default GalleryItem

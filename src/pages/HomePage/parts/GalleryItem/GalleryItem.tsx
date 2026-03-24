import React, { useRef } from 'react'
import { Link } from 'react-router-dom'

const GalleryItem: React.FC<{ project: any, translateFrom: 'left' | 'right' }> = ({ project, translateFrom }) => {
  const ref = useRef(null)
  return (
    <li
      className={`gallery-item ${translateFrom}`}
      ref={ref}
      data-link-hover={true}
    >
      <Link to={`/project/${project.id}`}>
        <div className="window">
          {project.title}
        </div>
        <img className="image-filter" src={project.imgsURL[0]} />
      </Link>
    </li>
  )
}

export default GalleryItem

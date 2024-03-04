import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import { projectsService } from '../../services/projects.service'
import { IProjectWithNext } from '../../types/projects.types'
import { InnerContent } from './parts/InnerContent/InnerContent'
import { motion, useScroll, useSpring } from 'framer-motion'
import Details from './parts/Details/Details'
import Image from './parts/Image/Image'

export function ProjectDetails() {
  // Component data
  const [project, setProject] = useState<IProjectWithNext | undefined>()
  const { projectId } = useParams()
  const navigate = useNavigate()
  useEffect(() => {
    const getProject = (projId: string) => {
      try {
        const data = projectsService.getProjectById(projId)
        setProject(data)
      } catch (err) {
        console.log('err:', err)
        navigate('/')
      }
    }
    if (projectId !== '' && projectId !== undefined) getProject(projectId)
    else navigate('/')
  }, [projectId, navigate])

  // Component Scroll functionality

  const innerRef = useRef<HTMLDivElement | null>(null)
  const [scrollX, setScrollX] = useState(0)

  function handleWheel(ev: React.WheelEvent<HTMLDivElement>) {
    if (!innerRef.current) return
    const { deltaY } = ev
    let movementAmount = 75
    const end = (innerRef.current.scrollWidth - window.innerWidth) * -1
    if (deltaY > 0 && scrollX > end) {
      movementAmount = Math.min(movementAmount, scrollX - end)
      setScrollX((prevX) => Math.max(prevX - movementAmount, end))
    } else if (deltaY < 0 && scrollX < 0) {
      movementAmount = Math.min(movementAmount, -scrollX)
      setScrollX((prevX) => Math.min(prevX + movementAmount, 0))
    }
  }

  return (
    <>
      <motion.div
        animate={{ x: scrollX }}
        className="inner"
        ref={innerRef}
        onWheel={handleWheel}
      >
        {project && (
          <>
            <Details project={project} />
            {project.imgsURL.map((url, index) => (
              <Image key={index} imgURL={url} index={index} />
            ))}
          </>
        )}
      </motion.div>
    </>
  )
}

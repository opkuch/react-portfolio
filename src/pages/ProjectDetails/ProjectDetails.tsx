import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import { projectsService } from '../../services/projects.service'
import { IProjectWithNext } from '../../types/projects.types'
import { motion } from 'framer-motion'
import Details from './parts/Details/Details'
import Image from './parts/Image/Image'
import NextProject from './parts/NextProject/NextProject'

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
  const scrollXRef = useRef(0)

  function handleWheel(ev: React.WheelEvent<HTMLDivElement>) {
    if (!innerRef.current) return
    const { deltaY } = ev
    let movementAmount = 120
    const currentScrollX = scrollXRef.current
    const end = (innerRef.current.scrollWidth - window.innerWidth) * -1
    if (deltaY > 0 && currentScrollX > end) {
      movementAmount = Math.min(movementAmount, currentScrollX - end)
      const next = Math.max(currentScrollX - movementAmount, end)
      scrollXRef.current = next
      setScrollX(next)
    } else if (deltaY < 0 && currentScrollX < 0) {
      movementAmount = Math.min(movementAmount, -currentScrollX)
      const next = Math.min(currentScrollX + movementAmount, 0)
      scrollXRef.current = next
      setScrollX(next)
    }
  }

  return (
    <section className='project-details disable-scrollbar' onWheel={handleWheel}>
      <motion.div
        animate={{ x: scrollX }}
        className="inner"
        ref={innerRef}
      >
        {project && (
          <>
            <Details project={project} />
            {project.imgsURL.map((url, index) => (
              <Image key={index} imgURL={url} index={index} />
            ))}
            <NextProject project={project}/>
          </>
        )}
      </motion.div>
    </section>
  )
}

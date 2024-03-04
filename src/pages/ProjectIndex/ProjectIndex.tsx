import { useState } from 'react'
import { IProject } from '../../types/projects.types'
import { ProjectsImage } from './parts/ProjectImage/ProjectImage'
import { InnerContent } from '../../components/InnerContent/InnerContent'
import { ProjectsList } from './parts/ProjectList/ProjectList'
import { projectsData } from '../../data/projects.data'
import { useTouchDevice } from '../../hooks/useTouchDevice'
import { PageBg } from '../../components/PageBg/PageBg'
import { PageHeader } from '../../components/PageHeader/PageHeader'

export function ProjectIndex() {
  const isTouchDevice = useTouchDevice()
  const [hoveredProject, setHoveredProject] = useState<IProject | null>(null)
  const [hoverState, setHoverState] = useState<'enter' | 'leave' | null>(null)

  function handleMouseHover(type: 'enter' | 'leave', proj: IProject) {
    if (isTouchDevice) return
    if (type === 'leave') {
      setHoveredProject(null)
    } else {
      setHoveredProject(proj)
    }
    setHoverState(type)
  }
  return (
    <section className="project-index">
      <PageBg />
      <PageHeader title="projects" />
      <InnerContent>
        {!isTouchDevice ? (
          <ProjectsImage
            projects={projectsData}
            hoveredProject={hoveredProject}
            hoverState={hoverState}
          />
        ) : null}
        <ProjectsList
          projects={projectsData}
          handleMouseHover={handleMouseHover}
        />
      </InnerContent>
    </section>
  )
}

import React from 'react'
import { Link } from 'react-router-dom'
import { Text } from '../../../../components/Text/Text'
import { IProjectWithNext } from '../../../../types/projects.types'

const NextProject: React.FC<{ project: IProjectWithNext }> = ({ project }) => {
  return (
    <section className="next-project layout-padding-inline">
      <div className="container">
        <Link to={`/project/${project.nextProject.id}`}>
          <img
            className="next-img image-filter"
            src={project.nextProject.img}
            alt={project.nextProject.title}
            data-link-hover={true}
          />
          <Text type="title" data-hover={true}>
            Next
          </Text>
        </Link>
      </div>
    </section>
  )
}

export default NextProject

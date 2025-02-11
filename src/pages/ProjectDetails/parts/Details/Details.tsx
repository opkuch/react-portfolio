import React from 'react'
import { VscArrowLeft, VscGithubAlt, VscLinkExternal } from 'react-icons/vsc'
import { Link } from 'react-router-dom'
import { Text } from '../../../../components/Text/Text'
import { IProject } from '../../../../types/projects.types'
import useScreenSize from '../../../../hooks/useScreenSize'

const Details: React.FC<{ project: IProject }> = ({ project }) => {
  const { width } = useScreenSize()
  return (
    <div className="header layout-padding-inline">
      <div className="links layout-padding-inline">
        <div className="column">
          <Link
            className="back-btn"
            data-hover={true}
            to={'/project'}
            data-tooltip="Back to index"
            data-tooltip-dir="right"
          >
            <VscArrowLeft />
          </Link>
        </div>
        <div className="column">
          <Link
            data-tooltip="Open Repository"
            data-tooltip-dir="bottom"
            target="_blank"
            data-hover={true}
            to={project.repoURL}
          >
            <VscGithubAlt />
          </Link>
          <Link
            data-tooltip="Open App"
            data-tooltip-dir="bottom"
            target="_blank"
            data-hover={true}
            to={project.link}
          >
            <VscLinkExternal />
          </Link>
        </div>
      </div>
      <div className="text-wrapper flex column">
        <Text type="title" size={width < 900? 'medium' : 'large'}>
          {project.title}
        </Text>
        <Text size={width < 900? 'small' : 'medium'}>{project.description}</Text>
        <Text size={width < 900? 'small' : 'medium'}>Tech stack: {project.stack.join(', ')}</Text>
      </div>
      <div className="scroll-indicator">
        <Text display={'inline'} type="title" size="small">
          Scroll
        </Text>
        <span className="scroll-animated"></span>
      </div>
    </div>
  )
}

export default Details

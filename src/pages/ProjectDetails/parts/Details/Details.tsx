import React from 'react'
import { VscArrowLeft, VscGithubAlt, VscLinkExternal } from 'react-icons/vsc'
import { Link } from 'react-router-dom'
import { Text } from '../../../../components/Text/Text'
import { IProject } from '../../../../types/projects.types'

const Details: React.FC<{ project: IProject }> = ({ project }) => {

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
          <Text type="title" size="medium">
            {project.title}
          </Text>
          <Text size="xsmall">{project.description}</Text>
          <Text size="xsmall">Tech stack: {project.stack.join(', ')}</Text>
        </div>
        <div className="scroll-indicator">
          <Text display={'inline'} type="title" size="xsmall">
            Scroll
          </Text>
          <span className="scroll-animated"></span>
        </div>
      </div>
  )
}

export default Details

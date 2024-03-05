import { IProject } from '../../../../types/projects.types'
import { Text } from '../../../../components/Text/Text'
import { Link } from 'react-router-dom'

interface Props {
    projects: IProject[]
    handleMouseHover: (type: 'enter' | 'leave', proj: IProject) => void
}

export function ProjectsList({ projects, handleMouseHover }: Props) {
    return (
        <ul className='projects-list'>
            {projects.map(proj => (
                <li
                    data-hover
                    key={`pl-${proj.id}`}
                    onMouseEnter={() => handleMouseHover('enter', proj)}
                    onMouseLeave={() => handleMouseHover('leave', proj)}
                >
                    <Link to={`/project/${proj.id}`}>
                        <Text type='title' size='medium'>
                            {proj.title}
                        </Text>
                        <Text size='xsmall'>{proj.shortDescription}</Text>
                    </Link>
                </li>
            ))}
        </ul>
    )
}
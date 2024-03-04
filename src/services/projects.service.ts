import { IProjectWithNext } from '../types/projects.types'
import { projectsData } from '../data/projects.data'

export const projectsService = {
    getProjectById,
}

function getProjectById(projId: string) {
    const projects = [...projectsData]
    const projectIdx = projects.findIndex(proj => proj.id === projId)
    if (projectIdx < 0) throw new Error(`Couldnt find project with projectId:${projId}`)
    const project = projects[projectIdx]
    let nextProjectIdx
    if (projectIdx === projects.length - 1) nextProjectIdx = 0
    else nextProjectIdx = projectIdx + 1
    const nextProject = projects[nextProjectIdx]
    return {
        ...project,
        nextProject: { id: nextProject.id, title: nextProject.title, img: nextProject.imgsURL[0] },
    } as IProjectWithNext
}
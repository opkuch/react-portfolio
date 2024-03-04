export interface IProject {
    id: string
    title: string
    description: string
    shortDescription?: string
    repoURL: string
    link: string
    stack: string[]
    imgsURL: string[]
    createdAt?: number
}

export interface IProjectWithNext extends IProject {
    nextProject: {
        id: string
        title: string
        img: string
    }
}
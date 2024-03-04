export interface IMenuItem {
    _id: string
    title: string
    url: string
}

export const menuItems: IMenuItem[] = [
    { _id: '1', title: 'Home', url: '/' },
    { _id: '2', title: 'Project Index', url: '/project' },
    { _id: '3', title: 'Info', url: '/info' },
]
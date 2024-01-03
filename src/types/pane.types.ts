import { ReactElement } from "react"

export interface PaneType {
    id: number,
    title: string,
    onClick: (paneId: number) => void,
    isShutter: boolean,
    open: boolean,
    start: boolean,
    children?: ReactElement
}

export enum PaneKeys {
    PANE_ONE = 'paneOne',
    PANE_TWO = 'paneTwo',
    PANE_THREE = 'paneThree',
    PANE_FOUR = 'paneFour',
}

export type PaneData = Record<PaneKeys, PaneType>
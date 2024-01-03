import { PaneKeys } from "../types/pane.types"

export const createInitialPanes = (onPaneClick: (paneId: number) => void) => {
    return {
        [PaneKeys.PANE_ONE]: {
          id: 1,
          title: "technologies",
          onClick: onPaneClick,
          isShutter: false,
          open: false,
          start: false,
        },
        [PaneKeys.PANE_TWO]: {
          id: 2,
          title: "projects",
          onClick: onPaneClick,
          isShutter: false,
          open: false,
          start: false,
        },
        [PaneKeys.PANE_THREE]: {
          id: 3,
          title: "resume",
          onClick: onPaneClick,
          isShutter: false,
          open: false,
          start: true,
        },
        [PaneKeys.PANE_FOUR]: {
          id: 4,
          title: "contact",
          onClick: onPaneClick,
          isShutter: false,
          open: false,
          start: false,
        },
    }
}
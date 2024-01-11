import { PaneKeys } from "../types/pane.types"

export const createInitialPanes = () => {
    return {
        [PaneKeys.PANE_ONE]: {
          id: 1,
          title: "technologies",
          isShutter: false,
          open: false,
          start: false,
        },
        [PaneKeys.PANE_TWO]: {
          id: 2,
          title: "projects",
          isShutter: false,
          open: false,
          start: false,
        },
        [PaneKeys.PANE_THREE]: {
          id: 3,
          title: "resume",
          isShutter: false,
          open: false,
          start: true,
        },
        [PaneKeys.PANE_FOUR]: {
          id: 4,
          title: "contact",
          isShutter: false,
          open: false,
          start: false,
        },
    }
}
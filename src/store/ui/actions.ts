import {Action} from 'overmind'

export const toggleMenu: Action<boolean> = ({state}, value) => {
  state.ui.menuOpened = value
}

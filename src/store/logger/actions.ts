import {Action} from 'overmind'

export const log: Action<string> = ({state}, value) => {
  if (state.logger.logs.length >= state.logger.maxLines) {
    state.logger.logs.shift()
  }

  state.logger.logs.push(value)
}

export const toggle: Action<boolean> = ({state}, value) => {
  state.logger.show = value
}

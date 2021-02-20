import {state} from './state'
import {onInitialize} from './onInitialize'
import {gql} from './effects/gql'
import * as actions from './actions'

export const config = {
  onInitialize,
  state,
  actions,
  effects: {
    gql,
  },
}

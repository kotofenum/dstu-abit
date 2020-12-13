import {IConfig} from 'overmind'
import {namespaced} from 'overmind/config'
import {createHook} from 'overmind-react'

import * as ui from './ui'
import * as logger from './logger'
import {config as events} from './events'

export const config = namespaced({ui, logger, events})

declare module 'overmind' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface Config
    extends IConfig<{
      state: typeof config.state
      actions: typeof config.actions
      effects: typeof config.effects
    }> {}
  // Due to circular typing we have to define an
  // explicit typing of state, actions and effects since
  // TS 3.9
}

export const useOvermind = createHook<typeof config>()

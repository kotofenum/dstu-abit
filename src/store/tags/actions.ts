import {AsyncAction} from 'overmind'
import { join } from 'path'
import { JoinEventInput } from '../graphql-global-types'

export const getMyTags: AsyncAction = async ({state, effects}) => {
  const {myUserTags} = await effects.tags.gql.queries.myTags()
  console.log(myUserTags)

  state.tags.tags = myUserTags
}
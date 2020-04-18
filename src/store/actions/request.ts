import { ActionContext } from 'vuex'
import { S } from '../types/state'

export const createRequest = 'createRequest'

export type TRequestPayload = {
  title: string;
  description: string;
}

export default {
  [createRequest] ({ commit }: ActionContext<S, any>, payload: TRequestPayload) {
    // eslint-disable-next-line no-debugger
    commit(createRequest, payload)
  }
}

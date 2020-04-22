import { ActionContext } from 'vuex'
import { S } from '../types/state'

export const changeFilter = 'changeFilter'

export type TfilterPayload = {
  filter: 'statuses';
  values: any[];
}

export default {
  [changeFilter] ({ commit }: ActionContext<S, any>, payload: TfilterPayload) {
    commit(changeFilter, payload)
  }
}

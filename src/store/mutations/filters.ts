import { TfilterPayload, changeFilter } from '../actions/filters'
import { S } from '../types/state'

export default {
  [changeFilter] (state: S, payload: TfilterPayload) {
    const { filters } = state
    filters[payload.filter] = payload.values
  }
}

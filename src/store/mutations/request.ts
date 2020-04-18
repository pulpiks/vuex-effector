import { TRequestPayload, createRequest } from '../actions/request'
import { S } from '../types/state'

export default {
  [createRequest] (state: S, payload: TRequestPayload) {
    // eslint-disable-next-line no-debugger
    const { requests } = state
    requests.push(payload)
  }
}

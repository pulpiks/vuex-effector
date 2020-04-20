import { TRequestPayload, createRequest } from '../actions/request'
import { S } from '../types/state'

export default {
  [createRequest] (state: S, payload: TRequestPayload) {
    const { requests } = state
    requests.push(payload)
  }
}

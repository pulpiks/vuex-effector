import { TRequestPayload, createRequest } from '../actions/request'
import { S } from '../types/state'

export default {
  [createRequest] (state: S, payload: TRequestPayload) {
    state.requests = [...state.requests, payload]
  }
}

import { User } from '../state/user'
import { S } from '../types/state'

export default {
  LOGIN (state: S, payload: User) {
    state.user = {
      ...payload
    }
  },
  LOGOUT (state: S) {
    state.user = {
      loggedIn: false,
      username: '',
      password: ''
    }
  }
}

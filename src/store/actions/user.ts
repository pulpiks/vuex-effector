import { User } from '../state/user'
import { ActionContext } from 'vuex'
import { S } from '../types/state'

type TUserPayload = {
  username: string;
  password: string;
}

export default {
  login (context: ActionContext<S, any>, user: TUserPayload) {
    context.commit('LOGIN', user)
  },
  logout (context: ActionContext<S, any>) {
    context.commit('LOGOUT')
  }
}

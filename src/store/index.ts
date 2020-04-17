import Vue from 'vue'
import Vuex from 'vuex'

import { userState } from './state/user'
import { requestsState } from './state/request'

import requestsActions from './actions/request'
import userActions from './actions/user'

import requestsMutations from './mutations/request'
import userMutations from './mutations/user'

import { S } from './types/state'

Vue.use(Vuex)

export default new Vuex.Store<S>({
  state: {
    user: userState,
    requests: requestsState
  },
  mutations: {
    ...userMutations,
    ...requestsMutations
  },
  strict: process.env.NODE_ENV !== 'production',
  actions: {
    ...userActions,
    ...requestsActions
  },
  modules: {
  },
  getters: {
  }
})

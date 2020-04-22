import Vue from 'vue'
import Vuex from 'vuex'

import { userState } from './state/user'
import { requestsState } from './state/request'
import { filtersState } from './state/filters'

import requestsActions from './actions/request'
import userActions from './actions/user'
import filtersActions from './actions/filters'

import requestsMutations from './mutations/request'
import userMutations from './mutations/user'
import filtersMutations from './mutations/filters'

import { S } from './types/state'

Vue.use(Vuex)

export default new Vuex.Store<S>({
  state: {
    user: userState,
    requests: requestsState,
    filters: filtersState
  },
  mutations: {
    ...userMutations,
    ...requestsMutations,
    ...filtersMutations
  },
  strict: process.env.NODE_ENV !== 'production',
  actions: {
    ...userActions,
    ...requestsActions,
    ...filtersActions
  },
  modules: {
  },
  getters: {
  }
})

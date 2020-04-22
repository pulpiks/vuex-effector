
import { createStore, createEvent, createStoreObject } from 'effector'
import { TRequestState } from '@/store/state/request'
import { userState } from '@/store/state/user'
import { filtersState } from '@/store/state/filters'

export const createRequestEvent = createEvent<TRequestState>()
export const resetRequestEvent = createEvent()

export const requestsStore = createStore<TRequestState[]>([])
  .on(createRequestEvent, (res, current) => ([...res, current]))
  .reset(resetRequestEvent)

export const login = createEvent()
export const logout = createEvent()
export const resetAuth = createEvent()
export const authStore = createStore(userState)
  .on(login, (_, data) => data)
  .on(logout, (_, data) => userState)
  .reset(resetAuth)

// authStore.watch(console.log)

export const counter = createStore(0)
  .on(createRequestEvent, (state) => state + 1)

export const createFilterEvent = createEvent<{
  filter: string;
  values: number[];
}>()

export const filtersStore = createStore(filtersState)
  .on(createFilterEvent, (state, payload) => ({
    ...state,
    [payload.filter]: [...payload.values]
  }))

// counter.watch(c => console.log(c))

export const store = createStoreObject({
  requests: requestsStore,
  user: authStore,
  counter
})

// store.watch(data => console.log(data))

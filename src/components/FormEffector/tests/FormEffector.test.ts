import { createLocalVue, shallowMount, mount } from '@vue/test-utils'
import VueRouter from 'vue-router'
import MyComponent from '../FormEffector.vue'
import store from '@/store'
import router from '@/router'
import { VueEffector } from 'effector-vue'
import vuetify from '@/plugins/vuetify'
import {
  createRequestEvent, counter
} from '@/storeEffector'

const localVue = createLocalVue()
localVue.use(VueRouter)
localVue.use(VueEffector)

describe('FormEffector', () => {
  it('render component', async () => {
    const wrapper = mount(MyComponent, {
      localVue,
      store,
      router,
      vuetify
    })
    createRequestEvent({
      title: 'title',
      description: 'some text'
    })
    expect(counter.getState()).toBe(1)
    const counterEl = wrapper.find('[data-test="counter"]')
    expect(counterEl.exists()).toBe(true)
    await wrapper.vm.$nextTick()
    expect(counterEl.text()).toMatch('1')
  })
})

import { createLocalVue, mount } from '@vue/test-utils'
import VueRouter from 'vue-router'
import MyComponent from '../FormVuex.vue'
import store from '@/store'
import router from '@/router'
import vuetify from '@/plugins/vuetify'

const localVue = createLocalVue()
localVue.use(VueRouter)

describe('FormVuex', () => {
  it('render component', async () => {
    const wrapper = mount(MyComponent, {
      localVue,
      store,
      router,
      vuetify
    })

    const titleInput = wrapper.findAll('input').at(0)
    titleInput.setValue('some text for title')
    titleInput.trigger('change')

    const descriptionInput = wrapper.findAll('input').at(1)

    descriptionInput.setValue('some text for description')
    descriptionInput.trigger('change')

    wrapper.find('form').trigger('submit.prevent')
    const counterEl = wrapper.find('[data-test="counter"]')
    expect(counterEl.exists()).toBe(true)
    await wrapper.vm.$nextTick()
    expect(counterEl.text()).toMatch('1')
  })
})

import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import HelloWorld from '../HelloWorld.vue'

describe('HelloWorld', () => {
  it('renders properly', () => {
    const wrapper = mount(HelloWorld, { props: { msg: 'Hello Vitest' } })
    expect(wrapper.text()).toContain('Hello Vitest')
  })

  // check if the component has a button
  it('has a button', () => {
    const wrapper = mount(HelloWorld)
    expect(wrapper.find('button')).toBeTruthy()
  })

  // check if the button text is 'Click me!'
  it('button text is "Update msg"', () => {
    const wrapper = mount(HelloWorld)
    expect(wrapper.find('button').text()).toBe('Update msg')
  })
})

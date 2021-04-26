import { mount } from '@vue/test-utils'
import Navbar from "~/components/Navbar";
import Version from "~/components/Version";


describe('Mounted Navbar', () => {
  const wrapper = mount(Navbar);

  test('is logo found', () => {
    expect(wrapper.get('#logo').text()).toBe('StunIcons')
  })

  test('is a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
  })

  test('is version component loaded', () => {
    expect(wrapper.findComponent(Version)).toBeTruthy()
  })
  test('is button found', () => {
    expect(wrapper.find('button')).toBeTruthy()
  })
})


import { mount } from '@vue/test-utils'
import Version from "~/components/Version";

describe('Version', () => {
  // Inspect the raw component options
  it('has data', () => {
    expect(typeof Version.data).toBe('function')
  })
})

describe('Mounted Version', () => {
  const wrapper = mount(Version);

  test('is a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
  })

  test('is version computed property working', () => {
    const versionNumber = parseFloat(Version.computed.version.call())
    expect(versionNumber).toBeTruthy()
  })
})

import { shallowMount } from '@vue/test-utils'
import Icon from "~/components/IconPack/Icon";




describe('Mounted SearchFilter', () => {
  const wrapper = shallowMount(Icon,{
    slots:{
      svg:'<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
          '   <path d="M9.00001 9.03669L7.00002 9.03666L7 15.0367L13 15.0367L13 13.0367L10.4143 13.0366L15.7438 7.7071L14.3296 6.29289L9.00004 11.6224L9.00001 9.03669Z" fill="black"/>\n' +
          '   <path fill-rule="evenodd" clip-rule="evenodd" d="M22 11C22 17.0751 17.0751 22 11 22C4.92487 22 0 17.0751 0 11C0 4.92487 4.92487 0 11 0C17.0751 0 22 4.92487 22 11ZM20 11C20 15.9706 15.9706 20 11 20C6.02944 20 2 15.9706 2 11C2 6.02944 6.02944 2 11 2C15.9706 2 20 6.02944 20 11Z" fill="black"/>\n' +
          '</svg>',
      name:'icon name'
    }
  })

  const iconCard = wrapper.find('.icon-card')



  test('is icon name inserted', () => {
    expect(wrapper.find('.name').text()).toBe('icon name')
  })

  test('is svg inserted', () => {
    expect(wrapper.find('.icon').html()).toContain('svg')
  })

})

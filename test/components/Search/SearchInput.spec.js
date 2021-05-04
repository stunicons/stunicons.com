import { mount } from '@vue/test-utils'
import SearchInput from "~/components/Header/SearchInput";




describe('Mounted SearchFilter', () => {
  const wrapper = mount(SearchInput);
  const input = wrapper.find('input')


  test('is searching class not available before input', () => {
    expect(wrapper.find('.searching').exists()).toBeFalsy()
  })

  //first input on  element
  input.element.value = 'Header mwana'


  wrapper.vm.$nextTick( () => {

    test('is searching class available after first input', () => {
     expect(wrapper.find('.searching').exists()).toBeTruthy()
    })

  })


    //first input on  element
  input.element.value = '    '


  wrapper.vm.$nextTick( () => {

    test('is searching class available after second input', () => {
     expect(wrapper.find('.searching').exists()).toBeFalsy()
    })

  })


})

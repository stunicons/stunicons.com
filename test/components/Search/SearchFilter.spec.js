import { mount } from '@vue/test-utils'
import SearchFilter from "~/components/Header/SearchFilter";




describe('Mounted SearchFilter', () => {
  const wrapper = mount(SearchFilter);
  const selector = wrapper.find('.filter--selector')


  test('is filter list not available before click', () => {
    expect(wrapper.find('.filter--list-to-select').exists()).toBeFalsy()
  })

  //first click on  element
  selector.trigger('click')


  wrapper.vm.$nextTick( () => {

    test('is filter list available after first click', () => {
      expect(wrapper.find('.filter--list-to-select').exists()).toBeTruthy()
    })

    test('is icon div has selecting class after first click', () => {
      expect(wrapper.find('.selecting').exists()).toBeTruthy()
    })

  })


    //second click on  element
  selector.trigger('click')

  wrapper.vm.$nextTick( ()=> {

    test('is filter list not available after second click', () => {
      expect(wrapper.find('.filter--list-to-select').exists()).toBeFalsy()
    })

    test('is icon div has no selecting class after second click', () => {
      expect(wrapper.find('.selecting').exists()).toBeFalsy()
    })

  })

})

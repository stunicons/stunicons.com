
import { mount} from '@vue/test-utils'
import IconClassCopy from "~/components/IconEditor/IconClassCopy";
import {describe, test} from "@jest/globals";

const iconClass = "si-arrow-bottom-left-o"



const wrapper = mount(IconClassCopy, {
  propsData: {
    iconClass:iconClass
  }
})


describe('Mounted IconClassCopy',  ()=> {

  test('test props', ()=> {
    expect(wrapper.props().iconClass).toBe(iconClass)
  })


})




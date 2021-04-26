
import { mount} from '@vue/test-utils'
import IconClassCopy from "~/components/IconEditor/IconClassCopy";
import {describe, test} from "@jest/globals";
const clipboardy = require('clipboardy');

const iconClass = "si-arrow-bottom-left-o"
const expectedCopyText = "<i class=\"si-arrow-bottom-left-o\"></i>"



const wrapper = mount(IconClassCopy, {
  propsData: {
    iconClass:iconClass
  }
})


describe('Mounted IconClassCopy',  ()=> {

  const copyEl = wrapper.find('.copy-icon')


  test('test props', ()=> {
    expect(wrapper.props().iconClass).toBe(iconClass)
  })


})




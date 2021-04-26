
import { mount} from '@vue/test-utils'
import CodeHighlight from "~/components/IconEditor/CodeHighlight";
import {describe, test} from "@jest/globals";

const iconClass = "si-arrow-bottom-left-o"
const expectedCopyText = "<i class=\"si-arrow-bottom-left-o\"></i>"



const wrapper = mount(CodeHighlight, {
  propsData: {
    iconClass
  }
})

navigator.clipboard.readText()
  .then(text => {
    console.log('Pasted content: ', text);
  })
  .catch(err => {
    console.error('Failed to read clipboard contents: ', err);
  });

describe('Mounted IconClassCopy', ()=> {

  const copyEl = wrapper.find('.copy-icon')

  test('test props', ()=> {
    expect(wrapper.props().iconClass).toBe(iconClass)
  })

  copyEl.trigger('click')

  test('test event emit on copy click', ()=> {
    expect(wrapper.emitted().classCopy).toBeTruthy()
  })

  test('test text copied on copy click', async ()=> {
    const text = await navigator.clipboard.readText();
    expect(text).toBe(expectedCopyText)
  })
})




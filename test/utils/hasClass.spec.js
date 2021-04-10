import hasClass from '~/utils/hasClass'

const elWithClass = document.createElement('p' )
elWithClass.classList.add('aClass');
elWithClass.classList.add('secondClass');
elWithClass.classList.add('testClass');

const elWithoutClass = document.createElement('p')

const testClassName = 'testClass'

describe('HasClass function', () => {

  test('is an element has class', () => {
    expect(hasClass(elWithClass,testClassName)).toBeTruthy();
  })

  test('is a class-less element doesn\'t have class ', () => {
    expect(hasClass(elWithoutClass,testClassName)).toBeFalsy()
  })
  test('is a class-full element doesn\'t have class ', () => {
    expect(hasClass(elWithoutClass,`un${testClassName}`)).toBeFalsy()
  })

})

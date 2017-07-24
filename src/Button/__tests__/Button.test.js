import React from 'react'
import { shallow } from 'enzyme'
import Button from '../Button'

it('renders without crashing', () => {
  expect(1).toEqual(2)
  shallow(<Button />)
})

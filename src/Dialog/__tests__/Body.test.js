import React from 'react'
import { shallow } from 'enzyme'
import Body from '../Body'

it('renders without crashing', () => {
  shallow(<Body />)
})

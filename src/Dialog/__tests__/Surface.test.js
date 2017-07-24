import React from 'react'
import { shallow } from 'enzyme'
import Surface from '../Surface'

it('renders without crashing', () => {
  shallow(<Surface />)
})

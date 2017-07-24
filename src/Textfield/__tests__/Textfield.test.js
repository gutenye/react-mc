import React from 'react'
import { shallow } from 'enzyme'
import Textfield from '../Textfield'

it('renders without crashing', () => {
  shallow(<Textfield />)
})

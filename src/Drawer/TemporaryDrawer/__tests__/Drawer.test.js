import React from 'react'
import { shallow } from 'enzyme'
import Drawer from '../Drawer'

it('renders without crashing', () => {
  shallow(<Drawer />)
})

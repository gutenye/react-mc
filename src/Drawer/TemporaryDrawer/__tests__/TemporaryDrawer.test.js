import React from 'react'
import { shallow } from 'enzyme'
import TemporaryDrawer from '../TemporaryDrawer'

it('renders without crashing', () => {
  shallow(<TemporaryDrawer />)
})

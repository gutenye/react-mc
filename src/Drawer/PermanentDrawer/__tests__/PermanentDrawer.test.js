import React from 'react'
import { shallow } from 'enzyme'
import PermanentDrawer from '../PermanentDrawer'

it('renders without crashing', () => {
  shallow(<PermanentDrawer />)
})

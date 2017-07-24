import React from 'react'
import { shallow } from 'enzyme'
import PersistentDrawer from '../PersistentDrawer'

it('renders without crashing', () => {
  shallow(<PersistentDrawer />)
})

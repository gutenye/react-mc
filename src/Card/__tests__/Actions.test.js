import React from 'react'
import { shallow } from 'enzyme'
import Actions from '../Actions'

it('renders without crashing', () => {
  shallow(<Actions />)
})

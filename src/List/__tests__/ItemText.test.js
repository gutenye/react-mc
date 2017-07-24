import React from 'react'
import { shallow } from 'enzyme'
import ItemText from '../ItemText'

it('renders without crashing', () => {
  shallow(<ItemText />)
})

import React from 'react'
import { shallow } from 'enzyme'
import Inner from '../Inner'

it('renders without crashing', () => {
  shallow(<Inner />)
})

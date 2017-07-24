import React from 'react'
import { shallow } from 'enzyme'
import LayoutGrid from '../LayoutGrid'

it('renders without crashing', () => {
  shallow(<LayoutGrid />)
})

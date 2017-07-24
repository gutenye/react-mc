import React from 'react'
import { shallow } from 'enzyme'
import GridList from '../GridList'

it('renders without crashing', () => {
  shallow(<GridList />)
})

import React from 'react'
import { shallow } from 'enzyme'
import Tiles from '../Tiles'

it('renders without crashing', () => {
  shallow(<Tiles />)
})

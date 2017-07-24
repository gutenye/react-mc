import React from 'react'
import { shallow } from 'enzyme'
import Tile from '../Tile'

it('renders without crashing', () => {
  shallow(<Tile />)
})

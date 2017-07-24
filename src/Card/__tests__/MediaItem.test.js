import React from 'react'
import { shallow } from 'enzyme'
import MediaItem from '../MediaItem'

it('renders without crashing', () => {
  shallow(<MediaItem />)
})

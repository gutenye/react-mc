import React from 'react'
import { shallow } from 'enzyme'
import Content from '../Content'

it('renders without crashing', () => {
  shallow(<Content />)
})

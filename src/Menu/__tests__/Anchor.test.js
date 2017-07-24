import React from 'react'
import { shallow } from 'enzyme'
import Anchor from '../Anchor'

it('renders without crashing', () => {
  shallow(<Anchor />)
})

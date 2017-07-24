import React from 'react'
import { shallow } from 'enzyme'
import SupportingText from '../SupportingText'

it('renders without crashing', () => {
  shallow(<SupportingText />)
})

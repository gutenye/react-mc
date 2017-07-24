import React from 'react'
import { shallow } from 'enzyme'
import PureCss from '../PureCss'

it('renders without crashing', () => {
  shallow(<PureCss />)
})

import React from 'react'
import { shallow } from 'enzyme'
import ToolbarSpacer from '../ToolbarSpacer'

it('renders without crashing', () => {
  shallow(<ToolbarSpacer />)
})

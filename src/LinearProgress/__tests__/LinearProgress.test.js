import React from 'react'
import { shallow } from 'enzyme'
import LinearProgress from '../LinearProgress'

it('renders without crashing', () => {
  shallow(<LinearProgress />)
})

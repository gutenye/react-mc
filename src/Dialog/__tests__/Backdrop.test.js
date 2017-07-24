import React from 'react'
import { shallow } from 'enzyme'
import Backdrop from '../Backdrop'

it('renders without crashing', () => {
  shallow(<Backdrop />)
})

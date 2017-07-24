import React from 'react'
import { shallow } from 'enzyme'
import Snackbar from '../Snackbar'

it('renders without crashing', () => {
  shallow(<Snackbar />)
})

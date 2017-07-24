import React from 'react'
import { shallow } from 'enzyme'
import Action from '../Action'

it('renders without crashing', () => {
  shallow(<Action />)
})

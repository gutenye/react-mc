import React from 'react'
import { shallow } from 'enzyme'
import Row from '../Row'

it('renders without crashing', () => {
  shallow(<Row />)
})

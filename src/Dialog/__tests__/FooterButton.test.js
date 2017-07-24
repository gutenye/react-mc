import React from 'react'
import { shallow } from 'enzyme'
import FooterButton from '../FooterButton'

it('renders without crashing', () => {
  shallow(<FooterButton />)
})

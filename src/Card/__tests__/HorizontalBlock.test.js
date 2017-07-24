import React from 'react'
import { shallow } from 'enzyme'
import HorizontalBlock from '../HorizontalBlock'

it('renders without crashing', () => {
  shallow(<HorizontalBlock />)
})

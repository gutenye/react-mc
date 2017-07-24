import React from 'react'
import { shallow } from 'enzyme'
import TabBar from '../TabBar'

it('renders without crashing', () => {
  const items = [{ text: 'Facebook' }, { text: 'Google' }]
  shallow(<TabBar items={items} />)
})

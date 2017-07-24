import React from 'react'
import { shallow } from 'enzyme'
import SimpleMenu from '../SimpleMenu'

it('renders without crashing', () => {
  const items = [{ text: 'Facebook' }, { text: 'Google' }]
  shallow(<SimpleMenu items={items} />)
})

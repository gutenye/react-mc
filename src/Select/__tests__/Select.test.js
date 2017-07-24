import React from 'react'
import { shallow } from 'enzyme'
import Select from '../Select'

it('renders without crashing', () => {
  const items = [
    { text: 'Facebook', value: 'facebook', disabled: true },
    { text: 'Apple', value: 'apple', disabled: true },
  ]
  shallow(<Select items={items} />)
})

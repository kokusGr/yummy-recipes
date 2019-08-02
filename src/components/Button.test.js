import React from 'react'
import { shallow } from 'enzyme'

import Button from './Button'

it('matches snapshot', () => {
    expect(shallow(<Button />)).toMatchSnapshot()
})

it('renders button element', () => {
    const wrapper = shallow(<Button />)
    expect(wrapper.find('button')).toHaveLength(1)
})

it('uses onClick handler from props', () => {
    const mockFn = jest.fn()
    const wrapper = shallow(<Button onClick={mockFn} />)
    wrapper.find('button').simulate('click')
    expect(mockFn).toHaveBeenCalledTimes(1)
})

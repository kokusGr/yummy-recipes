import React from 'react'
import { shallow } from 'enzyme'

import TextField from './TextField'

it('matches snapshot', () => {
    expect(shallow(<TextField />)).toMatchSnapshot()
})

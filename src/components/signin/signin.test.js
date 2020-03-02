import React from 'react';
import {shallow} from 'enzyme';
import SIGNIN from  './index';

it('testing state component', () => {
    const wrapper = shallow(<SIGNIN/>);
    wrapper.find(['id=counter']).simulate('click');
    wrapper.find(['id=counter']).simulate('click');
    expect(wrapper.state()).toEqual({})
})
import React from 'react';
import { shallow } from 'enzyme';

import Header from '../Header';

describe('header test', () => {

  it('should have correct routeName', () => {
    const label = 'Summary_test';
    const component = shallow(<Header onPress={()=>jest.fn()} routeName={label} />);
    const item = component.find({ children: label });
    expect(item).toHaveLength(1);
  })
 
})


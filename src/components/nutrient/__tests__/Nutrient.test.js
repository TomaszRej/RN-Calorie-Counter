import React from 'react';
import {shallow} from 'enzyme';
import Nutrient from 'src/components/nutrient/Nutrient';


describe('nutrient', () => {
  let component;
  const label='testLabel';
  const value= 10;

  beforeEach(() => {
    component = shallow(<Nutrient label={label} value={value}/>);
    jest.clearAllMocks();
  });

  it('should have correct label', () => {
    const item = component.find({children: label});
    expect(item).toHaveLength(1);
  });

  it('should have correct value', () => {
    const item = component.find({children: [value, 'g']});
    expect(item).toHaveLength(1);
  });


});

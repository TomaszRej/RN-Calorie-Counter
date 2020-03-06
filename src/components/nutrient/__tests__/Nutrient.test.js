import React from 'react';
import {shallow} from 'enzyme';
import Nutrient from 'src/components/nutrient/Nutrient';


describe('nutrient', () => {

  it('should have correct label', () => {
    const label='testLabel';
    const value= 10;

    const component = shallow(<Nutrient label={label} value={value}/>);

    const item = component.find({children: label});

    expect(item).toHaveLength(1);
  });

  it('should have correct value', () => {
    const label='testLabel';
    const value= 10;

    const component = shallow(<Nutrient label={label} value={value}/>);

    const item = component.find({children: [value, 'g']});
    expect(item).toHaveLength(1);
  });


});

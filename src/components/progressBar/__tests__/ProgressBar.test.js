import React from 'react';
import {shallow} from 'enzyme';
import ProgressBar from 'src/components/progressBar/ProgressBar';


describe('progress bar', () => {
  it('should have correct width', () => {

    const component = shallow(<ProgressBar/>);
    component.setState({transX: 10});

    const item = component.find({style: [undefined, {width: '10%'}]});

    //expect(item).toHaveLength(1);
    expect(component.props().style).toContainEqual({width: '10%'});
  });

  it('should have correct color', () => {
    const color = "red";

    const component = shallow(<ProgressBar/>);

    component.setProps({color: color});
    expect(component.props().style).toContainEqual({"backgroundColor": color});
  });
});

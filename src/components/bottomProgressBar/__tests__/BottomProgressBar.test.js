import React from 'react';
import {shallow} from 'enzyme';
import BottomProgressBar from '../BottomProgressBar';

describe('bottom progress bar', () => {
  let component;
  const style = {test: 'testStyle'};
  const percentage = 50;

  beforeEach(() => {
    component = shallow(
      <BottomProgressBar percentage={percentage} style={style} />,
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  })

  it('should have correct style', () => {
    expect(component.props().style).toMatchObject(style);
  });

  it('should have correct width', () => {
    expect.assertions(2)
    component.setState({transX: 10});

    const items = []
    component.findWhere(node => {
      if(node.props()?.style[1] !== undefined){
        items.push(node.props()?.style[1])
      }
    })

    expect(items[0]).toMatchObject({width: "10%"});
    expect(items[1]).toMatchObject({left: "10%"});

  });
});

import React from 'react';
import { shallow } from 'enzyme';
import Header from '../Header';

describe('Header test', () => {
  let component;
  const label = 'test';
  const mockFn = jest.fn();

  beforeEach(() => {
    component = shallow(<Header onPress={mockFn} routeName={label} />);
    jest.clearAllMocks();
  });


  it('should have correct routeName', () => {
    const item = component.find({ children: label });
    expect(item).toHaveLength(1);
  });

  it('should have correct icons', () => {
    expect.assertions(2)

    const icon1 = component.find({ name: 'menu' });
    const icon2 = component.find({ name: 'bell' });

    expect(icon1).toHaveLength(1);
    expect(icon2).toHaveLength(1)
  });

  it('should call function when pressed', () => {
    const icon = component.find({ name: 'menu' });

    icon.parent().props().onPress();

    expect(mockFn).toBeCalledTimes(1);
  });

});


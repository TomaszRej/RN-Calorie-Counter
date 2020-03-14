import {View} from 'react-native';

export const Easing = {inOut: jest.fn()};

export const Transition = {change: jest.fn()};

export default {
  Value: jest.fn(() => 10),
  event: jest.fn(),
  add: jest.fn(),
  eq: jest.fn(),
  set: jest.fn(),
  cond: jest.fn(),
  interpolate: jest.fn(),
  View: View,
  Extrapolate: {CLAMP: jest.fn()},
  concat: jest.fn((a, b) => a + b),
  timing: () => {
    return {
      start: jest.fn(),
    };
  },

};



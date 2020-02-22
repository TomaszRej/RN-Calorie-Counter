import React from 'react';
import {View} from 'react-native';
import {shallow} from 'enzyme';
import {Text} from '../Text';

describe('Text', () => {
  describe('Rendering', () => {
    it('should match to snapshot - Default', () => {
      const component = shallow(<Text>Test</Text>);
      expect(component).toMatchSnapshot();
    });
    it('should match to snapshot - Italics', () => {
      const component = shallow(<Text textType="italic">Test</Text>);
      expect(component).toMatchSnapshot();
    });
    it('should match to snapshot - align right', () => {
      const component = shallow(<Text align="right">Test</Text>);
      expect(component).toMatchSnapshot();
    });
    it('should match to snapshot - Default Bold', () => {
      const component = shallow(<Text weight="bold">Test</Text>);
      expect(component).toMatchSnapshot();
    });
    it('should match to snapshot - Default Medium', () => {
      const component = shallow(<Text weight="medium">Test</Text>);
      expect(component).toMatchSnapshot();
    });
    it('should match to snapshot - Default Thin', () => {
      const component = shallow(<Text weight="thin">Test</Text>);
      expect(component).toMatchSnapshot();
    });

    it('should match to snapshot - H1', () => {
      const component = shallow(<Text size="h1">Test</Text>);
      expect(component).toMatchSnapshot();
    });
    it('should match to snapshot - H2', () => {
      const component = shallow(<Text type="h2">Test</Text>);
      expect(component).toMatchSnapshot();
    });
    it('should match to snapshot - H3', () => {
      const component = shallow(<Text type="h3">Test</Text>);
      expect(component).toMatchSnapshot();
    });
    it('should match to snapshot - Medium', () => {
      const component = shallow(<Text type="medium">Test</Text>);
      expect(component).toMatchSnapshot();
    });
    it('should match to snapshot - Small', () => {
      const component = shallow(<Text type="small">Test</Text>);
      expect(component).toMatchSnapshot();
    });
  });

  describe('Chceck Props', () => {
    describe('type', () => {
      let props;
      let component;
      const weight = 'bold';
      const type = 'h3';
      const text = 'Test';
      const style = {color: 'red'};

      beforeEach(() => {
        component = shallow(
          <View>
            <Text style={style} weight={weight} type={type}>
              {text}
            </Text>
          </View>,
        );
        props = component.props().children.props;
        jest.clearAllMocks();
      });

      it('weight should be bold', () => {
        expect(props.weight).toEqual(weight);
      });
      it('type should be small', () => {
        expect(props.type).toEqual(type);
      });
      it('style ', () => {
        expect(props.style).toEqual(style);
      });
      it('ext should be "Test" ', () => {
        expect(props.children).toEqual(text);
      });
    });
  });
});

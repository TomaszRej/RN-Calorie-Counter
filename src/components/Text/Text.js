/**
 * @flow
 */

import * as React from 'react';
import {Text as RNText} from 'react-native';
import {FontWeight} from 'src/utils/FontWeight';
import {styles} from './styles';

type Props = {
  style?: RNText.propTypes.style,
  weight:
    | 'thin'
    | 'ultraLight'
    | 'light'
    | 'regular'
    | 'medium'
    | 'semiBold'
    | 'bold'
    | 'extraBold'
    | 'heavy'
    | 'black',
  fontFamily: 'Lato',
  size: 'h1' | 'h2' | 'h3' | 'default' | 'medium' | 'small',
  textType?: 'italic' | null,
  // eslint-disable-next-line flowtype/no-weak-types
  children?: string | React$Node,
  numberOfLines?: number,
  color?: string,
  align: 'left' | 'right' | 'center',
};
export const Text = ({
  style,
  weight,
  fontFamily,
  size,
  textType,
  children,
  numberOfLines,
  color,
  align,
}: Props): React.Node => {
  let fontSizeStyle;

  switch (size) {
    case 'small': {
      fontSizeStyle = styles.small;
      break;
    }
    case 'medium': {
      fontSizeStyle = styles.medium;
      break;
    }

    case 'h1': {
      fontSizeStyle = styles.h1;
      break;
    }
    case 'h2': {
      fontSizeStyle = styles.h2;
      break;
    }
    case 'h3': {
      fontSizeStyle = styles.h3;
      break;
    }
    default: {
      fontSizeStyle = styles.defaultSize;
      break;
    }
  }

  return (
    <RNText
      numberOfLines={numberOfLines}
      style={[
        {textAlign: align},
        FontWeight(fontFamily, weight, textType),
        fontSizeStyle,
        styles.textColor,
        style,
        color && {color},
      ]}
    >
      {children}
    </RNText>
  );
};

Text.defaultProps = {
  weight: 'regular',
  size: 'default',
  textType: null,
  fontFamily: 'Lato',
  align: 'left',
};

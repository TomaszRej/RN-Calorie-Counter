/**
 * @flow
 */
import {Platform} from 'react-native';
import {fontWeights} from 'src/variables/fontWeights';
import {capitalize} from './typo';

/**
 * @fontFamily -  Lato
 * @weight - one of [thin, ultraLight, light, regular, medium, semiBold, bold, heavy, black]
 * @type - one of [italic]
 */
export const FontWeight = (
  fontFamily: string = 'Lato',
  weight: string = 'regular',
  type?: string = '',
  // eslint-disable-next-line flowtype/no-weak-types
): Object => {
  if (Platform.OS === 'ios') {
    return {
      fontFamily: `${capitalize(fontFamily)}-${capitalize(type ==='italic' && weight ==='regular'?'':weight)}${capitalize(type)}`,
      fontWeight: fontWeights[weight.toLowerCase()],
      fontStyle: type === ' italic' ? 'italic' : null,
    };
  }
  return {fontFamily: `${capitalize(fontFamily)}-${capitalize(type ==='italic' && weight ==='regular'?'':weight)}${capitalize(type)}`};
};

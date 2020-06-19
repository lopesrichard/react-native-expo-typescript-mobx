export * from './types';

import { ShadowPropTypesIOS } from 'react-native';

import { Shadow } from './types';

import { colors } from '~/util/colors';

export const makeShadowStyle = (props: Shadow): typeof ShadowPropTypesIOS => {
  const style: typeof ShadowPropTypesIOS = {
    shadowColor: colors.shadow,
    shadowOffset: {
      width: props.shadow,
      height: props.shadow,
    },
    shadowOpacity: 1,
    shadowRadius: 1,
  };
  return style;
};

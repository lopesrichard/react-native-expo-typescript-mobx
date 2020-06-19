export * from './types';

import { TransformsStyle } from 'react-native';

import { Transform } from './types';

export const makeTransformStyle = (props: Transform): TransformsStyle => {
  const style: TransformsStyle = {
    transform: props.transform || undefined,
  };
  return style;
};

import React, { FunctionComponent } from 'react';

import {
  TouchableOpacity,
  TouchableOpacityProps,
  TouchableWithoutFeedbackProps,
  TouchableWithoutFeedback,
} from 'react-native';

import { View, makeViewStyle } from './view';

export type TouchableAnimation = 'none' | 'opacity';

export type Touchable = View &
  TouchableOpacityProps &
  TouchableWithoutFeedbackProps & {
    animation?: TouchableAnimation;
  };

export const Touchable: FunctionComponent<Touchable> = props => {
  switch (props.animation) {
    case 'none':
      return <TouchableWithoutFeedback {...props} style={makeViewStyle(props)} />;
    case 'opacity':
      return <TouchableOpacity {...props} style={makeViewStyle(props)} />;
    default:
      return <TouchableOpacity {...props} style={makeViewStyle(props)} />;
  }
};

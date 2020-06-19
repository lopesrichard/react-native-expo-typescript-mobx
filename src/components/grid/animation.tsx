import React, { FunctionComponent } from 'react';

import LottieView from 'lottie-react-native';

import { ViewStyle, makeViewStyle } from './view';

import { AnimationList, animations } from '~/assets/animations';

export type Animation = ViewStyle & {
  name: AnimationList;
};

export const Animation: FunctionComponent<Animation> = ({ name, ...props }) => {
  return <LottieView {...props} style={makeViewStyle(props)} source={animations[name]} />;
};

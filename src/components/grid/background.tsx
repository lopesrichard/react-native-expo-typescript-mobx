import React, { FunctionComponent } from 'react';

import { ImageBackground, ImageBackgroundProps } from 'react-native';

import { ViewStyle, makeViewStyle } from './view';

export type Background = ViewStyle;

export const Background: FunctionComponent<Background & ImageBackgroundProps> = props => {
  return <ImageBackground {...props} style={makeViewStyle(props)} />;
};

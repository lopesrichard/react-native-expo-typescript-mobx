import React, { FunctionComponent } from 'react';

import { SafeAreaView } from 'react-native';

import { ViewStyle, makeViewStyle } from './view';

export type SafeArea = ViewStyle;

export const SafeArea: FunctionComponent<SafeArea> = props => {
  return <SafeAreaView {...props} style={makeViewStyle(props)} />;
};

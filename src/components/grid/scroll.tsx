import React, { FunctionComponent } from 'react';

import { ScrollView, ScrollViewProps } from 'react-native';

import { ViewStyle, makeViewStyle } from './view';

export type Scroll = ViewStyle & ScrollViewProps;

export const Scroll: FunctionComponent<Scroll> = props => {
  return <ScrollView {...props} contentContainerStyle={makeViewStyle(props)} keyboardShouldPersistTaps="handled" />;
};

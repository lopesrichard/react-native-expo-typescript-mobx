import React, { FunctionComponent } from 'react';

import { ViewProps, View, StyleSheet } from 'react-native';

export type Absolute = ViewProps & {};

export const Absolute: FunctionComponent<ViewProps> = props => {
  return <View {...props} style={StyleSheet.absoluteFill} />;
};

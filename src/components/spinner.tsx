import React from 'react';

import { ActivityIndicator, ActivityIndicatorProps } from 'react-native';

import { colors } from '~/util/colors';

export default (props: ActivityIndicatorProps) => {
  return <ActivityIndicator {...{ ...props, color: colors.parse(props.color) }} />;
};

import { MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';
import { IconProps } from 'react-native-vector-icons/Icon';

import React, { FunctionComponent } from 'react';

import { colors } from '~/util/colors';

export type CustomIconProps = {
  vendor?: string;
};

export const Icon: FunctionComponent<IconProps & CustomIconProps> = props => {
  const properties = { ...props, color: props.color ? colors.parse(props.color) : undefined };
  const vendor = props.vendor || 'fontawesome';
  switch (vendor.toLowerCase()) {
    case 'material':
      return <MaterialCommunityIcons {...properties} />;
    case 'fontawesome':
      return <FontAwesome5 {...properties} />;
  }
};

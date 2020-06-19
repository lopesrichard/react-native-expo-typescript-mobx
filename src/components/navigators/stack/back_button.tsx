import React, { FunctionComponent } from 'react';

import { StackNavigationProp } from '@react-navigation/stack';
import { RootNavigatorScreenList } from '~/navigators';

import * as View from '~/components/grid';
import { Icon } from '~/components/icon';

export type BackButtonProps = {
  color: string;
  navigation: StackNavigationProp<RootNavigatorScreenList>;
};

export const BackButton: FunctionComponent<BackButtonProps> = ({ navigation, color }) => {
  return (
    <View.Touchable
      flex={1}
      animation="opacity"
      onPress={() => navigation.goBack()}
      px={25}
      hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}>
      <Icon name="arrow-left" size={25} color={color} />
    </View.Touchable>
  );
};

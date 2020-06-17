import React, { FunctionComponent } from 'react';

import { DrawerNavigationProp } from '@react-navigation/drawer';
import { RootNavigatorScreenList } from '~/navigators';

import * as View from '~/components/view';
import * as Text from '~/components/text';
import { Icon } from '~/components/icon';

import { userStore } from '~/stores';

export type PageProps = {
  navigation: DrawerNavigationProp<RootNavigatorScreenList>;
};

export const Page: FunctionComponent<PageProps> = ({ children, navigation }) => {
  const openDrawer = () => navigation.openDrawer();

  return (
    <View.Center flex={1} color="white">
      <View.Touchable position="absolute" t={20} l={20} onPress={openDrawer} animation="opacity">
        <Icon name="bars" color="primary" size={25} />
      </View.Touchable>
      <View.Touchable position="absolute" t={20} r={20} onPress={openDrawer} animation="opacity">
        <Text.Bold size={18} color="primary">
          {userStore.get().name}
        </Text.Bold>
      </View.Touchable>
      {children}
    </View.Center>
  );
};

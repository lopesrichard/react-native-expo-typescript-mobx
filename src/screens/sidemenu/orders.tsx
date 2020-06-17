import React, { FunctionComponent } from 'react';

import { DrawerNavigationProp } from '@react-navigation/drawer';
import { RootNavigatorScreenList } from '~/navigators';

import { Page } from '~/screens/sidemenu/page';

import * as Text from '~/components/text';

export type OrdersProps = {
  navigation: DrawerNavigationProp<RootNavigatorScreenList>;
};

export const Orders: FunctionComponent<OrdersProps> = ({ navigation }) => {
  return (
    <Page navigation={navigation}>
      <Text.Bold size={50} color="primary">
        Pedidos
      </Text.Bold>
    </Page>
  );
};

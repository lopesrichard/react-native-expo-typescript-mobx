import React, { FunctionComponent } from 'react';

import { DrawerNavigationProp } from '@react-navigation/drawer';
import { RootNavigatorScreenList } from '~/navigators';

import { Page } from '~/screens/sidemenu/page';

import * as Text from '~/components/text';

export type ConfigProps = {
  navigation: DrawerNavigationProp<RootNavigatorScreenList>;
};

export const Config: FunctionComponent<ConfigProps> = ({ navigation }) => {
  return (
    <Page navigation={navigation}>
      <Text.Bold size={50} color="primary">
        Configurações
      </Text.Bold>
    </Page>
  );
};

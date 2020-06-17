import React, { FunctionComponent } from 'react';

import { DrawerNavigationProp } from '@react-navigation/drawer';
import { RootNavigatorScreenList } from '~/navigators';

import { Page } from '~/screens/sidemenu/page';

import * as Text from '~/components/text';

export type MessagesProps = {
  navigation: DrawerNavigationProp<RootNavigatorScreenList>;
};

export const Messages: FunctionComponent<MessagesProps> = ({ navigation }) => {
  return (
    <Page navigation={navigation}>
      <Text.Bold size={50} color="primary">
        Mensagens
      </Text.Bold>
    </Page>
  );
};

import React, { FunctionComponent } from 'react';

import { DrawerNavigationProp } from '@react-navigation/drawer';
import { RootNavigatorScreenList } from '~/navigators';

import { Page } from '~/screens/sidemenu/page';

import * as View from '~/components/grid';
import * as Text from '~/components/text';
import * as Button from '~/components/button';

import { userStore } from '~/stores';

export type HomeProps = {
  navigation: DrawerNavigationProp<RootNavigatorScreenList>;
};

export const Home: FunctionComponent<HomeProps> = ({ navigation }) => {
  return (
    <Page navigation={navigation}>
      <Text.Bold size={50} color="primary">
        Página Inicial
      </Text.Bold>
      <View.Center mt={50}>
        <Button.Rounded text="Realizar Pagamento" mt={10} primary loading={true} onPress={() => {}} />
        <Button.Rounded text="Sair" mt={10} secondary onPress={() => userStore.clear()} />
      </View.Center>
    </Page>
  );
};

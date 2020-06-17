import React from 'react';

import { NavigationProp } from '@react-navigation/native';
import { RootNavigatorScreenList } from '~/navigators';

import * as View from '~/components/view';
import * as Text from '~/components/text';

import { userStore } from '~/stores';

export type AccountProps = {
  navigation: NavigationProp<RootNavigatorScreenList>;
};

export const Account = ({ navigation }: AccountProps) => {
  return (
    <View.Center flex={1} color="white">
      <Text.Bold size={50} color="primary">
        Minha Conta
      </Text.Bold>
      <Text.Bold size={30} mt={30} color="primary">
        {userStore.get().name}
      </Text.Bold>
    </View.Center>
  );
};

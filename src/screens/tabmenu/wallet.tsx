import React from 'react';

import { NavigationProp } from '@react-navigation/native';
import { RootNavigatorScreenList } from '~/navigators';

import * as View from '~/components/grid';
import * as Text from '~/components/text';

import { cardStore } from '~/stores';

export type WalletProps = {
  navigation: NavigationProp<RootNavigatorScreenList>;
};

export const Wallet = ({ navigation }: WalletProps) => {
  return (
    <View.Center flex={1} color="white" p={20}>
      <Text.Bold size={50} align="center" color="primary">
        Minha Carteira
      </Text.Bold>
      <View.Scroll my={50}>
        {cardStore.all().map(card => (
          <View.Center color="primary" p={20} br={5} my={5}>
            <Text.Normal color="white" size={18}>
              {card.number}
            </Text.Normal>
          </View.Center>
        ))}
      </View.Scroll>
    </View.Center>
  );
};

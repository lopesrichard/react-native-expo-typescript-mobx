import React from 'react';

import { NavigationProp } from '@react-navigation/native';
import { RootNavigatorScreenList } from '~/navigators';

import * as View from '~/components/view';
import * as Text from '~/components/text';
import * as Button from '~/components/button';

import { cardStore } from '~/stores';

export type SearchProps = {
  navigation: NavigationProp<RootNavigatorScreenList>;
};

export const Search = ({ navigation }: SearchProps) => {
  const onAddCard = () => {
    cardStore.add({ number: '1234123412341234' });
  };

  const onRemoveCard = () => {
    cardStore.remove({ number: '1234123412341234' });
  };

  return (
    <View.Center flex={1} color="white">
      <Text.Bold size={50} color="primary">
        Buscar
      </Text.Bold>
      <Button.Rounded text="Adicionar cartão" mt={50} primary onPress={onAddCard} />
      <Button.Rounded text="Remover cartões" mt={10} secondary onPress={onRemoveCard} />
    </View.Center>
  );
};

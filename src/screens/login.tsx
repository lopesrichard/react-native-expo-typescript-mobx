import React from 'react';

import { NavigationProp } from '@react-navigation/native';
import { RootNavigatorScreenList } from '~/navigators';

import * as Facebook from 'expo-facebook';

import * as View from '~/components/grid';
import * as Text from '~/components/text';
import * as Button from '~/components/button';

import { userStore } from '~/stores/user';

export type LoginProps = {
  navigation: NavigationProp<RootNavigatorScreenList>;
};

export const Login = ({ navigation }: LoginProps) => {
  Facebook.initializeAsync(undefined, undefined);

  const enter = () => userStore.set({ name: '152' });
  return (
    <View.Center flex={1} color="white">
      <Text.Bold size={50} color="primary">
        Entrar
      </Text.Bold>
      <View.Center mt={50}>
        <Button.Rounded text="Entrar com E-mail" mt={10} primary onPress={enter} />
        <Button.Rounded text="Entrar com Facebook" mt={10} secondary onPress={enter} />
      </View.Center>
    </View.Center>
  );
};

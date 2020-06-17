import React from 'react';

import { NavigationProp } from '@react-navigation/native';
import { RootNavigatorScreenList } from '~/navigators';

import * as Facebook from 'expo-facebook';

import * as View from '~/components/view';
import * as Text from '~/components/text';
import * as Button from '~/components/button';

export type RegisterProps = {
  navigation: NavigationProp<RootNavigatorScreenList>;
};

export const Register = ({ navigation }: RegisterProps) => {
  Facebook.initializeAsync(undefined, undefined);

  const login = () => navigation.navigate('Login');
  return (
    <View.Center flex={1} color="white">
      <Text.Bold size={50} color="primary">
        Cadastrar
      </Text.Bold>
      <View.Center mt={50}>
        <Button.Rounded text="Criar com E-mail" mt={10} primary onPress={login} />
        <Button.Rounded text="Criar com Facebook" mt={10} secondary onPress={login} />
      </View.Center>
    </View.Center>
  );
};

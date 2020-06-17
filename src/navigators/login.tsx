import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { StackHeaderOptions, StackNavigationProp } from '@react-navigation/stack/lib/typescript/src/types';

import { Welcome } from '~/screens/welcome';
import { Register } from '~/screens/register';
import { Login } from '~/screens/login';

import { BackButton } from '~/components/navigators/stack/back_button';
import { Constants } from '~/navigators/contants';
import { RootNavigatorScreenList } from '.';

const Stack = createStackNavigator<RootNavigatorScreenList>();

export type Options = {
  navigation: StackNavigationProp<RootNavigatorScreenList>;
};

const options = ({ navigation }: Options): StackHeaderOptions => ({
  headerTitle: () => null,
  headerStyle: Constants.stack.headerStyle,
  headerTransparent: true,
  headerLeft: () => <BackButton navigation={navigation} color="primary" />,
});

export default () => (
  <Stack.Navigator>
    <Stack.Screen name="Welcome" component={Welcome} options={() => ({ headerShown: false })} />
    <Stack.Screen name="Register" component={Register} options={options} />
    <Stack.Screen name="Login" component={Login} options={options} />
  </Stack.Navigator>
);

import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import Login from '~/navigators/login';
import TabMenu from '~/navigators/tabs';

import { userStore } from '~/stores';

export type RootNavigatorScreenList = {
  Home: undefined;
  TabMenu: undefined;
  Account: undefined;
  Search: undefined;
  Welcome: undefined;
  Register: undefined;
  Login: undefined;
};

export const Router = () => {
  return <NavigationContainer>{userStore.initialized() ? <TabMenu /> : <Login />}</NavigationContainer>;
};

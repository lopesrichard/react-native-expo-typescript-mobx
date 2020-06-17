import React from 'react';

import { createDrawerNavigator, DrawerNavigationOptions } from '@react-navigation/drawer';

import { Home } from '~/screens/sidemenu/home';
import { Config } from '~/screens/sidemenu/config';
import { Orders } from '~/screens/sidemenu/orders';
import { Messages } from '~/screens/sidemenu/messages';
import { Registers } from '~/screens/sidemenu/registers';

import { Icon } from '~/components/icon';
import * as Text from '~/components/text';

const Drawer = createDrawerNavigator();

const options = (label: string, icon: string): DrawerNavigationOptions => {
  return {
    drawerLabel: ({ focused }) => <Text.Normal color="primary">{label}</Text.Normal>,
    drawerIcon: ({ focused }) => <Icon color="primary" name={icon} size={20} />,
  };
};

// prettier-ignore
export const SideMenu = () => (
  <Drawer.Navigator lazy={false}>
    <Drawer.Screen name="home" component={Home} options={options.bind(this, 'Página Inicial', 'home')} />
    <Drawer.Screen name="orders" component={Orders} options={options.bind(this, 'Pedidos', 'truck')} />
    <Drawer.Screen name="messages" component={Messages} options={options.bind(this, 'Mensagens', 'envelope-open-text')} />
    <Drawer.Screen name="registers" component={Registers} options={options.bind(this, 'Cadastros', 'user-plus')} />
    <Drawer.Screen name="config" component={Config} options={options.bind(this, 'Configurações', 'cog')} />
  </Drawer.Navigator>
);

import React, { useState, FunctionComponent } from 'react';

import { observable } from 'mobx';
import { observer } from 'mobx-react';

import { DrawerNavigationProp } from '@react-navigation/drawer';
import { RootNavigatorScreenList } from '~/navigators';

import { Page } from '~/screens/sidemenu/page';

import * as Text from '~/components/text';
import * as Input from '~/components/input';
import { MaskType } from '~/util/mask';
import { Mask } from 'react-native-svg';

class RegistersStore {
  @observable public name: string;
  @observable public document: string;
  @observable public birthday: string;
}

const store = new RegistersStore();

export type RegistersProps = {
  navigation: DrawerNavigationProp<RootNavigatorScreenList>;
};

export const Registers: FunctionComponent<RegistersProps> = observer(({ navigation }) => {
  return (
    <Page navigation={navigation}>
      <Text.Bold size={50} color="primary">
        Cadastros
      </Text.Bold>
      <Input.Animated
        text={store.name}
        icon="user"
        placeholder="Nome completo"
        onChangeText={(name: string) => (store.name = name)}
      />
      <Input.Animated
        text={store.document}
        keyboardType="numeric"
        mask={MaskType.CPF}
        icon="file-alt"
        placeholder="Documento"
        onChangeText={(document: string) => (document = store.document)}
      />
      <Input.Animated
        text={store.birthday}
        keyboardType="numeric"
        mask={MaskType.DATE}
        icon="calendar"
        placeholder="Data de Nascimento"
        onChangeText={(birthday: string) => (birthday = store.birthday)}
      />
    </Page>
  );
});

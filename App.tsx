import 'react-native-gesture-handler';
import React from 'react';
import { enableScreens } from 'react-native-screens';
import { Router } from '~/navigators';
import { userStore, cardStore } from '~/stores';
import { Splash } from '~/components/splash';
import { observer } from 'mobx-react';
import { store } from './AppStore';

enableScreens();

store.loader.start();

export default observer(() => {
  React.useEffect(() => {
    (async () => {
      await Promise.all([userStore.load(), cardStore.load()]);
      setTimeout(() => store.loader.stop(), 2000);
    })();
  }, []);

  return store.loader.loading() ? <Splash /> : <Router />;
});

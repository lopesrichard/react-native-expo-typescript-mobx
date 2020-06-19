import React from 'react';

import LottieView from 'lottie-react-native';
import * as View from '~/components/grid';

import { animations } from '~/assets/animations';

export const Splash = () => {
  return (
    <View.Center flex={1} color="primary">
      <LottieView source={animations.loading} autoPlay loop />
    </View.Center>
  );
};

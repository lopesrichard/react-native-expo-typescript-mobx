import React, { FunctionComponent } from 'react';

import { View } from './view';

export type Center = View;

export const Center: FunctionComponent<Center> = props => {
  return <View {...{ ...props, align: 'center', justify: 'center' }} />;
};

import React, { FunctionComponent } from 'react';

import { View } from './view';

export type Column = View & {
  reverse?: boolean;
};

export const Column: FunctionComponent<Column> = props => {
  return <View {...{ ...props, fd: props.reverse ? 'column-reverse' : 'column' }} />;
};

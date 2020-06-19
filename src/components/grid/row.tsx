import React, { FunctionComponent } from 'react';

import { View } from './view';

export type Row = View & {
  reverse?: boolean;
};

export const Row: FunctionComponent<Row> = props => {
  return <View {...{ ...props, fd: props.reverse ? 'row-reverse' : 'row' }} />;
};

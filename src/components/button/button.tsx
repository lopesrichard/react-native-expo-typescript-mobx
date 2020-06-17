import React from 'react';

import _ from 'lodash';

import * as View from '~/components/view';
import * as Text from '~/components/text';
import Spinner from '~/components/spinner';

import { CustomButtonProps } from '~/components/button';

import { themes } from '~/util/themes';

const theme = (props: CustomButtonProps) => {
  const { contrast, outline, disabled } = props;

  const theme = themes.resolve(
    _.pick(props, 'primary', 'secondary', 'success', 'warning', 'info', 'danger', 'dark', 'light'),
  );

  return {
    view: {
      color: disabled ? theme.disabled.color : contrast ? theme.contrast : theme.color,
      bw: outline ? 1.5 : 0,
      bc: disabled ? theme.disabled.contrast : contrast ? theme.color : theme.contrast,
    },
    text: { color: disabled ? theme.disabled.contrast : contrast ? theme.color : theme.contrast },
  };
};

const default_view = { h: 45, w: 250 };
const default_text = { size: 20 };

const Button = (props: CustomButtonProps) => {
  const { view, text } = theme(props);
  return (
    <View.Touchable {...view} {...default_view} {...props} align="center" justify="center" animation="opacity">
      {props.loading ? (
        <Spinner {...text} />
      ) : (
        <Text.Normal {...text} {...default_text}>
          {props.text}
        </Text.Normal>
      )}
    </View.Touchable>
  );
};

export const Flat = (props: CustomButtonProps) => {
  return <Button {...props} br={5} />;
};

export const Rounded = (props: CustomButtonProps) => {
  return <Button {...props} br={100} />;
};

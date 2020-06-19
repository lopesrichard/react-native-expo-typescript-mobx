import React, { FunctionComponent } from 'react';

import { TouchableWithoutFeedback, KeyboardAvoidingView, Keyboard, KeyboardAvoidingViewProps } from 'react-native';

export type KeyboardAvoid = KeyboardAvoidingViewProps;

export const KeyboardAvoid: FunctionComponent<KeyboardAvoid> = ({ children }) => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView behavior="padding" enabled style={{ flex: 1 }}>
        {children}
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

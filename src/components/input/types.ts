import { MaskType } from '~/util/mask';

export type CustomAnimatedTextInputStyle = {
  placeholder?: string;
  container?: string;
  input?: string;
  text?: string;
  icon?: string;
  color?: string;
};

export type CustomAnimatedTextInputProps = {
  mask?: MaskType;
};

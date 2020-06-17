import { ThemeList } from '~/util/themes';
import { ButtonProps } from 'react-native';
import { CustomViewStyle } from '../view';

export type ThemeButtonProps = {
  [key in ThemeList]?: boolean;
};

export type CustomButtonProps = ThemeButtonProps &
  Omit<ButtonProps, 'title'> &
  CustomViewStyle & {
    text: string;
    loading?: boolean;
    contrast?: boolean;
    outline?: boolean;
  };

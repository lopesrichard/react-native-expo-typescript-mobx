import { ButtonProps } from 'react-native';

import { View } from '~/components/grid';

import { ThemeList } from '~/util/themes';

export type ThemeButtonProps = {
  [key in ThemeList]?: boolean;
};

export type CustomButtonProps = ThemeButtonProps &
  Omit<ButtonProps, 'title'> &
  View & {
    text: string;
    loading?: boolean;
    contrast?: boolean;
    outline?: boolean;
  };

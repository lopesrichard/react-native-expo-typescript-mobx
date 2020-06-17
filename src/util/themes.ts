import { ColorList } from './colors';

export type ResolveProps = {
  [key: string]: boolean;
};

const resolve = function (props: ResolveProps) {
  for (var prop in props) {
    if (this[prop]) {
      return this[prop];
    }
  }
};

export type Resolve = (props: ResolveProps) => Theme | undefined;

export type Theme = {
  color: ColorList;
  contrast: 'white' | 'black';
  disabled: { color: ColorList; contrast: 'white' | 'black' };
};

export type Themes = {
  resolve: Resolve;
  primary: Theme;
  secondary: Theme;
  success: Theme;
  warning: Theme;
  info: Theme;
  danger: Theme;
  dark: Theme;
  light: Theme;
};

export type ThemeList = keyof Omit<Themes, 'resolve'>;

export const themes: Themes = {
  resolve: resolve,
  primary: { color: 'smoky', contrast: 'white', disabled: { color: 'gray', contrast: 'white' } },
  secondary: { color: 'blush', contrast: 'white', disabled: { color: 'gray', contrast: 'white' } },
  success: { color: 'puerto', contrast: 'white', disabled: { color: 'gray', contrast: 'white' } },
  warning: { color: 'apricot', contrast: 'white', disabled: { color: 'gray', contrast: 'white' } },
  info: { color: 'puerto', contrast: 'white', disabled: { color: 'gray', contrast: 'white' } },
  danger: { color: 'apricot', contrast: 'white', disabled: { color: 'gray', contrast: 'white' } },
  dark: { color: 'black', contrast: 'white', disabled: { color: 'gray', contrast: 'white' } },
  light: { color: 'white', contrast: 'black', disabled: { color: 'gray', contrast: 'white' } },
};

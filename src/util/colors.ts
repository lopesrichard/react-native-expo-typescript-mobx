import { themes } from '~/util/themes';

const parse = function (color: string) {
  return this[color] || this[themes.resolve({ [color]: true })?.color] || color;
};

export type Parse = (color: string) => string;

export type Colors = {
  parse: Parse;
  smoky: string;
  blush: string;
  puerto: string;
  apricot: string;
  black: string;
  white: string;
  gray: string;
  shadow: string;
};

export type ColorList = keyof Omit<Colors, 'parse'>;

export const colors = {
  parse: parse,
  smoky: '#65587f',
  blush: '#e85f99',
  puerto: '#50bda1',
  apricot: '#f18867',
  black: '#111111',
  white: '#FFFFFF',
  gray: '#DADADA',
  shadow: '#999999',
};

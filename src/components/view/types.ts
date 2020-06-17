import { ViewStyle, Animated } from 'react-native';
import { ImageList } from '~/assets/images';

export type Align = 'start' | 'end' | 'center' | 'stretch' | 'baseline';

export type Justify = 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly';

export type Self = 'start' | 'end' | 'center' | 'stretch' | 'baseline' | 'auto';

export type CustomViewStyle = {
  flex?: ViewStyle['flex'];
  position?: ViewStyle['position'];
  direction?: ViewStyle['flexDirection'];
  grow?: ViewStyle['flexGrow'];
  wrap?: ViewStyle['flexWrap'];
  w?: ViewStyle['width'];
  width?: ViewStyle['width'];
  size?: string | number;
  h?: ViewStyle['height'];
  height?: ViewStyle['height'];
  maxh?: ViewStyle['maxHeight'];
  maxHeight?: ViewStyle['maxHeight'];
  minh?: ViewStyle['minHeight'];
  minHeight?: ViewStyle['minHeight'];
  maxw?: ViewStyle['maxWidth'];
  maxWidth?: ViewStyle['maxWidth'];
  minw?: ViewStyle['minWidth'];
  minWidth?: ViewStyle['minWidth'];
  t?: ViewStyle['top'];
  top?: ViewStyle['top'];
  l?: ViewStyle['left'];
  left?: ViewStyle['left'];
  r?: ViewStyle['right'];
  right?: ViewStyle['right'];
  b?: ViewStyle['bottom'];
  bottom?: ViewStyle['bottom'];
  align?: Align;
  justify?: Justify;
  self?: Self;
  m?: ViewStyle['margin'];
  margin?: ViewStyle['margin'];
  ml?: ViewStyle['marginLeft'];
  mr?: ViewStyle['marginRight'];
  mt?: ViewStyle['marginTop'];
  mb?: ViewStyle['marginBottom'];
  mx?: string | number;
  my?: string | number;
  p?: ViewStyle['padding'];
  padding?: ViewStyle['padding'];
  pl?: ViewStyle['paddingLeft'];
  pr?: ViewStyle['paddingRight'];
  pt?: ViewStyle['paddingTop'];
  pb?: ViewStyle['paddingBottom'];
  px?: string | number;
  py?: string | number;
  bw?: ViewStyle['borderWidth'];
  blw?: ViewStyle['borderLeftWidth'];
  brw?: ViewStyle['borderRightWidth'];
  btw?: ViewStyle['borderTopWidth'];
  bbw?: ViewStyle['borderBottomWidth'];
  bxw?: number;
  byw?: number;
  bc?: ViewStyle['borderColor'];
  blc?: ViewStyle['borderLeftColor'];
  btc?: ViewStyle['borderTopColor'];
  brc?: ViewStyle['borderRightColor'];
  bbc?: ViewStyle['borderBottomColor'];
  byc?: string;
  bxc?: string;
  br?: ViewStyle['borderRadius'];
  btlr?: ViewStyle['borderTopLeftRadius'];
  btrr?: ViewStyle['borderTopRightRadius'];
  bblr?: ViewStyle['borderBottomLeftRadius'];
  bbrr?: ViewStyle['borderBottomRightRadius'];
  btr?: number;
  bbr?: number;
  color?: string;
  elevation?: ViewStyle['elevation'];
  shadow?: number;
  opacity?: ViewStyle['opacity'];
  transform?: ViewStyle['transform'];
  pointerEvents?: 'auto' | 'none' | 'box-none';
  z?: ViewStyle['zIndex'];
};

export type CustomTouchableProps = {
  animation?: 'none' | 'opacity';
};

export type CustomImageProps = {
  name?: ImageList;
  uri?: string;
};

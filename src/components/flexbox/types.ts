import { FlexStyle } from 'react-native';

export type Align = 'start' | 'end' | 'center' | 'stretch' | 'baseline';

export type Justify = 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly';

export type Self = 'start' | 'end' | 'center' | 'stretch' | 'baseline' | 'auto';

export type Direction = 'row' | 'column' | 'row-reverse' | 'column-reverse';

export type Wrap = 'wrap' | 'nowrap' | 'wrap-reverse';

export type Display = 'none' | 'flex';

export type Position = 'absolute' | 'relative';

export type Overflow = 'visible' | 'hidden' | 'scroll';

export type FlexBox = {
  /**
   * Flex
   */
  flex?: number;

  /**
   * Flex Grow
   */
  grow?: number;

  /**
   * Flex Wrap
   */
  wrap?: Wrap;

  /**
   * Flex Direction
   */
  type?: Direction;

  /**
   * Flex Shrink
   */
  shrink?: number;

  /**
   * Align Items
   */
  align?: Align;

  /**
   * Align Self
   */
  self?: Self;

  /**
   * Justify Content
   */
  justify?: Justify;

  /**
   * Display
   */
  display?: Display;

  /**
   * Position
   */
  position?: Position;

  /**
   * Bottom
   */
  b?: number | string;
  /**
   * Left
   */
  l?: number | string;
  /**
   * Top
   */
  t?: number | string;
  /**
   * Right
   */
  r?: number | string;

  /**
   * Margin
   */
  m?: number | string;

  /**
   * Margin Left
   */
  ml?: number | string;

  /**
   * Margin Right
   */
  mr?: number | string;

  /**
   * Margin Top
   */
  mt?: number | string;

  /**
   * Margin Bottom
   */
  mb?: number | string;

  /**
   * Margin Horizontal
   */
  mx?: number | string;

  /**
   * Margin Vertical
   */
  my?: number | string;

  /**
   * Padding
   */
  p?: number | string;

  /**
   * Padding Left
   */
  pl?: number | string;

  /**
   * Padding Right
   */
  pr?: number | string;

  /**
   * Padding Top
   */
  pt?: number | string;

  /**
   * Padding Bottom
   */
  pb?: number | string;

  /**
   * Padding Horizontal
   */
  px?: number | string;

  /**
   * Padding Vertical
   */
  py?: number | string;

  /**
   * Border Width
   */
  bw?: number;

  /**
   * Border Left Width
   */
  blw?: number;

  /**
   * Border Right Width
   */
  brw?: number;

  /**
   * Border Top Width
   */
  btw?: number;

  /**
   * Border Bottom Width
   */
  bbw?: number;

  /**
   * Border Horitontal Width
   */
  bxw?: number;

  /**
   * Border Vertical Width
   */
  byw?: number;

  /**
   * Height
   */
  h?: number | string;

  /**
   * Width
   */
  w?: number | string;

  /**
   * Size
   */
  size?: number | string;

  /**
   * [Max Height, Max Width]
   */
  max?: [number | string, number | string];

  /**
   * [Min Height, Min Width]
   */
  min?: [number | string, number | string];

  /**
   * OverFlow
   */
  overflow?: Overflow;

  /**
   * zIndex
   */
  z?: number;
};

export const align = (value: Align): FlexStyle['alignItems'] => {
  return new Map<Align, FlexStyle['alignItems']>([
    ['start', 'flex-start'],
    ['end', 'flex-end'],
    ['center', 'center'],
    ['stretch', 'stretch'],
    ['baseline', 'baseline'],
  ]).get(value);
};

export const justify = (value: Justify): FlexStyle['justifyContent'] => {
  return new Map<Justify, FlexStyle['justifyContent']>([
    ['start', 'flex-start'],
    ['end', 'flex-end'],
    ['center', 'center'],
    ['between', 'space-between'],
    ['around', 'space-around'],
    ['evenly', 'space-evenly'],
  ]).get(value);
};

export const self = (value: Self): FlexStyle['alignSelf'] => {
  return new Map<Self, FlexStyle['alignSelf']>([
    ['start', 'flex-start'],
    ['end', 'flex-end'],
    ['center', 'center'],
    ['stretch', 'stretch'],
    ['baseline', 'baseline'],
    ['auto', 'auto'],
  ]).get(value);
};

export const flexbox = (props: FlexBox): FlexStyle => {
  const style: FlexStyle = {
    flex: props.flex || undefined,
    flexGrow: props.grow || undefined,
    flexWrap: props.wrap || undefined,
    flexDirection: props.type || undefined,
    flexShrink: props.shrink || undefined,
    alignItems: props.align ? align(props.align) : undefined,
    alignSelf: props.self ? self(props.self) : undefined,
    justifyContent: props.justify ? justify(props.justify) : undefined,
    display: props.display || undefined,
    position: props.position || undefined,
    bottom: props.b || undefined,
    left: props.l || undefined,
    top: props.t || undefined,
    right: props.r || undefined,
    margin: props.m || undefined,
    marginLeft: props.ml || undefined,
    marginRight: props.mr || undefined,
    marginTop: props.mt || undefined,
    marginBottom: props.mb || undefined,
    marginHorizontal: props.mx || undefined,
    marginVertical: props.my || undefined,
    padding: props.p || undefined,
    paddingLeft: props.pl || undefined,
    paddingRight: props.pr || undefined,
    paddingTop: props.pt || undefined,
    paddingBottom: props.pb || undefined,
    paddingHorizontal: props.px || undefined,
    paddingVertical: props.py || undefined,
    borderWidth: props.bw || undefined,
    borderLeftWidth: props.blw || props.bxw || undefined,
    borderRightWidth: props.brw || props.bxw || undefined,
    borderTopWidth: props.btw || props.btw || undefined,
    borderBottomWidth: props.bbw || props.bbw || undefined,
    height: props.h || props.size || undefined,
    width: props.w || props.size || undefined,
    maxHeight: props.max[0] || undefined,
    maxWidth: props.max[1] || undefined,
    minHeight: props.min[0] || undefined,
    minWidth: props.min[1] || undefined,
    overflow: props.overflow || undefined,
    zIndex: props.z || undefined,
  };
  return style;
};

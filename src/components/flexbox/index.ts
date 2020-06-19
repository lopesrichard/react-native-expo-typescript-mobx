export * from './types';

import { FlexStyle } from 'react-native';

import { Align, Justify, Self, FlexBox } from './types';

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

export const makeFlexboxStyle = (props: FlexBox): FlexStyle => {
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
    height: props.h || undefined,
    width: props.w || undefined,
    maxHeight: props.max[0] || undefined,
    maxWidth: props.max[1] || undefined,
    minHeight: props.min[0] || undefined,
    minWidth: props.min[1] || undefined,
    overflow: props.overflow || undefined,
    zIndex: props.z || undefined,
  };
  return style;
};

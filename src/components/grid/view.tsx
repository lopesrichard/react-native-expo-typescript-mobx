import React, { FunctionComponent } from 'react';

import { View as RNView, ViewStyle as RNViewStyle, ViewProps as RNViewProps } from 'react-native';

import _ from 'lodash';

import { colors } from '~/util/colors';

import { makeFlexboxStyle, FlexBox } from '~/components/flexbox';
import { makeShadowStyle, Shadow } from '~/components/shadow';
import { makeTransformStyle, Transform } from '~/components/transforms';

export type Border = 'solid' | 'dotted' | 'dashed';

export type PointerEvents = 'auto' | 'none' | 'box-none';

export type BaseView = FlexBox & Transform & Shadow;

export type ViewStyle = BaseView & {
  /**
   * Background Color
   */
  color?: string;

  /**
   * Opacity
   */
  opacity?: number;

  /**
   * Elevation
   */
  shadow?: number;

  /**
   * BorderRadius
   */
  br?: number;

  /**
   * BorderBottomRadius
   */
  bbr?: number;

  /**
   * BorderTopRadius
   */
  btr?: number;

  /**
   * BorderBottomLeftRadius
   */
  bblr?: number;

  /**
   * BorderBottomRightRadius
   */
  bbrr?: number;

  /**
   * BorderTopRightRadius
   */
  btrr?: number;

  /**
   * BorderTopLeftRadius
   */
  btlr?: number;

  /**
   * BorderColor
   */
  bc?: string;

  /**
   * BorderTopColor
   */
  btc?: string;

  /**
   * BorderBottomColor
   */
  bbc?: string;

  /**
   * BorderLeftColor
   */
  blc?: string;

  /**
   * BorderRightColor
   */
  brc?: string;

  /**
   * BorderStyle
   */
  bs?: Border;
};

export type View = ViewStyle & RNViewProps;

export const View: FunctionComponent<View> = props => {
  return <RNView {...props} style={makeViewStyle(props)} />;
};

export const makeViewStyle = (props: View): RNViewStyle => {
  const style: RNViewStyle = {
    ...makeFlexboxStyle(props),
    ...makeShadowStyle(props),
    ...makeTransformStyle(props),
    opacity: props.opacity || undefined,
    backgroundColor: props.color ? colors.parse(props.color) : undefined,
    elevation: props.shadow || undefined,
    borderRadius: props.br || undefined,
    borderBottomLeftRadius: props.bblr || props.bbr || undefined,
    borderBottomRightRadius: props.bbrr || props.bbr || undefined,
    borderTopRightRadius: props.btrr || props.btr || undefined,
    borderTopLeftRadius: props.btlr || props.btr || undefined,
    borderColor: props.bc ? colors.parse(props.bc) : undefined,
    borderTopColor: props.btc ? colors.parse(props.btc) : undefined,
    borderBottomColor: props.bbc ? colors.parse(props.bbc) : undefined,
    borderLeftColor: props.blc ? colors.parse(props.blc) : undefined,
    borderRightColor: props.brc ? colors.parse(props.brc) : undefined,
    borderStyle: props.bs || undefined,
  };
  return style;
};

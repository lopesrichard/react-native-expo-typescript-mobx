import React, { FunctionComponent } from 'react';

import { Animated as RNAnimated, ViewProps } from 'react-native';

import { BaseView, makeViewStyle } from './view';
import { makeFlexboxStyle } from '../flexbox';
import { makeShadowStyle } from '../shadow';
import { makeTransformStyle } from '../transforms';
import { colors } from '~/util/colors';

interface PerpectiveTransform { perspective: number | RNAnimated.Value | RNAnimated.AnimatedInterpolation; } // prettier-ignore
interface RotateTransform { rotate: string | RNAnimated.Value | RNAnimated.AnimatedInterpolation; } // prettier-ignore
interface RotateXTransform { rotateX: string | RNAnimated.Value | RNAnimated.AnimatedInterpolation; } // prettier-ignore
interface RotateYTransform { rotateY: string | RNAnimated.Value | RNAnimated.AnimatedInterpolation; } // prettier-ignore
interface RotateZTransform { rotateZ: string | RNAnimated.Value | RNAnimated.AnimatedInterpolation; } // prettier-ignore
interface ScaleTransform { scale: number | RNAnimated.Value | RNAnimated.AnimatedInterpolation; } // prettier-ignore
interface ScaleXTransform { scaleX: number | RNAnimated.Value | RNAnimated.AnimatedInterpolation; } // prettier-ignore
interface ScaleYTransform { scaleY: number | RNAnimated.Value | RNAnimated.AnimatedInterpolation; } // prettier-ignore
interface TranslateXTransform { translateX: number | RNAnimated.Value | RNAnimated.AnimatedInterpolation; } // prettier-ignore
interface TranslateYTransform { translateY: number | RNAnimated.Value | RNAnimated.AnimatedInterpolation; } // prettier-ignore
interface SkewXTransform { skewX: string | RNAnimated.Value | RNAnimated.AnimatedInterpolation; } // prettier-ignore
interface SkewYTransform { skewY: string | RNAnimated.Value | RNAnimated.AnimatedInterpolation; } // prettier-ignore

export type Animated = Omit<BaseView, 'transform'> &
  ViewProps & {
    /**
     * Transform
     */
    transform?: (
      | PerpectiveTransform
      | RotateTransform
      | RotateXTransform
      | RotateYTransform
      | RotateZTransform
      | ScaleTransform
      | ScaleXTransform
      | ScaleYTransform
      | TranslateXTransform
      | TranslateYTransform
      | SkewXTransform
      | SkewYTransform
    )[];
    /**
     * Background Color
     */
    color?: string | RNAnimated.Value | RNAnimated.AnimatedInterpolation;

    /**
     * Opacity
     */
    opacity?: number | RNAnimated.Value | RNAnimated.AnimatedInterpolation;

    /**
     * Elevation
     */
    shadow?: number | RNAnimated.Value | RNAnimated.AnimatedInterpolation;

    /**
     * BorderRadius
     */
    br?: number | RNAnimated.Value | RNAnimated.AnimatedInterpolation;

    /**
     * BorderBottomRadius
     */
    bbr?: number | RNAnimated.Value | RNAnimated.AnimatedInterpolation;

    /**
     * BorderTopRadius
     */
    btr?: number | RNAnimated.Value | RNAnimated.AnimatedInterpolation;

    /**
     * BorderBottomLeftRadius
     */
    bblr?: number | RNAnimated.Value | RNAnimated.AnimatedInterpolation;

    /**
     * BorderBottomRightRadius
     */
    bbrr?: number | RNAnimated.Value | RNAnimated.AnimatedInterpolation;

    /**
     * BorderTopRightRadius
     */
    btrr?: number | RNAnimated.Value | RNAnimated.AnimatedInterpolation;

    /**
     * BorderTopLeftRadius
     */
    btlr?: number | RNAnimated.Value | RNAnimated.AnimatedInterpolation;

    /**
     * BorderColor
     */
    bc?: string | RNAnimated.Value | RNAnimated.AnimatedInterpolation;

    /**
     * BorderTopColor
     */
    btc?: string | RNAnimated.Value | RNAnimated.AnimatedInterpolation;

    /**
     * BorderBottomColor
     */
    bbc?: string | RNAnimated.Value | RNAnimated.AnimatedInterpolation;

    /**
     * BorderLeftColor
     */
    blc?: string | RNAnimated.Value | RNAnimated.AnimatedInterpolation;

    /**
     * BorderRightColor
     */
    brc?: string | RNAnimated.Value | RNAnimated.AnimatedInterpolation;
  };

export const Animated: FunctionComponent<Animated> = props => {
  return <RNAnimated.View {...props} style={makeAnimatedViewStyle(props)} />;
};

export const makeAnimatedViewStyle = (props: Animated): any => {
  const style: any = {
    ...makeFlexboxStyle(props),
    ...makeShadowStyle(props),
    transform: props.transform,
    opacity: props.opacity || undefined,
    backgroundColor: props.color ? colors.parse(props.color as any) : undefined,
    elevation: props.shadow || undefined,
    borderRadius: props.br || undefined,
    borderBottomLeftRadius: props.bblr || props.bbr || undefined,
    borderBottomRightRadius: props.bbrr || props.bbr || undefined,
    borderTopRightRadius: props.btrr || props.btr || undefined,
    borderTopLeftRadius: props.btlr || props.btr || undefined,
    borderColor: props.bc ? colors.parse(props.bc as any) : undefined,
    borderTopColor: props.btc ? colors.parse(props.btc as any) : undefined,
    borderBottomColor: props.bbc ? colors.parse(props.bbc as any) : undefined,
    borderLeftColor: props.blc ? colors.parse(props.blc as any) : undefined,
    borderRightColor: props.brc ? colors.parse(props.brc as any) : undefined,
  };
  return style;
};

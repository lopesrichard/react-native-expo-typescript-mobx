import React from 'react';

import { TextInput, Animated as RNAnimated, TextInputProps } from 'react-native';

import _ from 'lodash';

import * as View from '~/components/view';
import * as Text from '~/components/text';
import { Icon } from '~/components/icon';
import { CustomAnimatedTextInputStyle, CustomAnimatedTextInputProps } from '~/components/input';

import { colors } from '~/util/colors';
import { mask } from '~/util/mask';

const customAnimatedInputStylePropNames = ['placeholder', 'container', 'input', 'text', 'icon', 'color'];

const parseProps = (
  props: CustomAnimatedTextInputStyle & TextInputProps,
): { style: Partial<CustomAnimatedTextInputStyle>; properties: Partial<TextInputProps> } => {
  const style = {};

  const properties = _.omit(props, customAnimatedInputStylePropNames);

  return { style: style, properties };
};

export const Animated = (props: CustomAnimatedTextInputStyle & TextInputProps & CustomAnimatedTextInputProps) => {
  const [animatedY] = React.useState(new RNAnimated.Value(0));
  const [animatedX] = React.useState(new RNAnimated.Value(0));
  const [animatedScale] = React.useState(new RNAnimated.Value(0));
  const [animatedColor] = React.useState(new RNAnimated.Value(0));

  const { style, properties } = parseProps({ ...props });

  const animateIn = (changeColor = true) => {
    RNAnimated.parallel([
      RNAnimated.spring(animatedY, { toValue: 1, useNativeDriver: true }),
      RNAnimated.spring(animatedX, { toValue: 1, useNativeDriver: true }),
      RNAnimated.spring(animatedScale, { toValue: 1, useNativeDriver: true }),
      changeColor ? RNAnimated.timing(animatedColor, { toValue: 150, duration: 300 }) : undefined,
    ]).start();
  };

  const animateOut = () => {
    RNAnimated.timing(animatedColor, { toValue: 0, duration: 300 }).start();
    if (props.text === '') {
      RNAnimated.parallel([
        RNAnimated.spring(animatedY, { toValue: 0, useNativeDriver: true }),
        RNAnimated.spring(animatedX, { toValue: 0, useNativeDriver: true }),
        RNAnimated.spring(animatedScale, { toValue: 0, useNativeDriver: true }),
      ]).start();
    }
  };

  props.text ? animateIn(false) : animateOut();

  const translateY = animatedY.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -15],
  });

  const translateX = animatedX.interpolate({
    inputRange: [0, 1],
    outputRange: [10, -10],
  });

  const scale = animatedScale.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0.7],
  });

  const color = animatedColor.interpolate({
    inputRange: [0, 150],
    outputRange: [colors.parse('primary'), colors.parse('secondary')],
  });

  const default_container = { h: 50, justify: 'center', w: '80%', bw: 1, mt: 5, bc: color };

  return (
    <View.Animated {...default_container} {...props.container}>
      <View.Row align="center">
        {props.icon && (
          <View.Animated size={50} p={5} align="center" justify="center" color={color}>
            <Icon color="white" size={18} name={props.icon} />
          </View.Animated>
        )}
        <View.Column w="100%" mt={10} px={10}>
          <TextInput
            {...properties}
            style={{ ...style, width: '100%' }}
            onFocus={() => animateIn()}
            onBlur={animateOut}>
            <Text.Animated color={color} size={16}>
              {props.mask ? mask(props.mask, props.text) : props.text}
            </Text.Animated>
          </TextInput>
          <View.Animated pointerEvents="none" position="absolute" l={0} transform={[{ translateX, translateY, scale }]}>
            <Text.Animated color={color} size={16}>
              {props.placeholder}
            </Text.Animated>
          </View.Animated>
        </View.Column>
      </View.Row>
    </View.Animated>
  );
};

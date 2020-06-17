import React, { FunctionComponent } from 'react';

import {
  ViewStyle,
  View,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Keyboard,
  KeyboardAvoidingView,
  ImageSourcePropType,
  Dimensions,
  ViewProps,
  ImageProps,
  StyleSheet,
  TouchableOpacityProps,
  TouchableWithoutFeedbackProps,
  ScrollViewProps,
  ImageBackgroundProps,
  KeyboardAvoidingViewProps,
  Animated as RNAnimated,
  Image as RNImage,
} from 'react-native';

import _ from 'lodash';

import LottieView from 'lottie-react-native';

import { colors } from '~/util/colors';
import { images } from '~/assets/images';

import { animations, AnimationList } from '~/assets/animations';

import { Align, Justify, Self, CustomViewStyle, CustomTouchableProps, CustomImageProps } from '~/components/view';
import { SafeAreaViewProps } from 'react-native-safe-area-context';

import * as Conversion from '~/util/conversion';

export const Column: FunctionComponent<CustomViewStyle & ViewProps> = props => {
  const { style, properties } = parseProps({ ...props, direction: 'column' });
  return <View {...properties} style={style} />;
};

export const Row: FunctionComponent<CustomViewStyle & ViewProps> = props => {
  const { style, properties } = parseProps({ ...props, direction: 'row' });
  return <View {...properties} style={style} />;
};

export const Center: FunctionComponent<CustomViewStyle & ViewProps> = props => {
  const { style, properties } = parseProps({ ...props, align: 'center', justify: 'center' });
  return <View {...properties} style={style} />;
};

export const Absolute: FunctionComponent<CustomViewStyle & ViewProps> = props => {
  return <View {...props} style={StyleSheet.absoluteFill} />;
};

export const SafeArea: FunctionComponent<CustomViewStyle & SafeAreaViewProps> = props => {
  const { style, properties } = parseProps({ ...props });
  return <SafeAreaView {...properties} style={style} />;
};

export const Scroll: FunctionComponent<CustomViewStyle & ScrollViewProps> = props => {
  const { style, properties } = parseProps({ ...props });
  return <ScrollView {...properties} contentContainerStyle={style} keyboardShouldPersistTaps="handled" />;
};

// Parece não existir interfaces para o Animated ainda
// export const Animated: FunctionComponent<CustomViewStyle> = props => {
export const Animated: FunctionComponent<any> = props => {
  const { style, properties } = parseProps({ ...props });
  return <RNAnimated.View {...properties} style={style} />;
};

export const Background: FunctionComponent<CustomViewStyle & ImageBackgroundProps> = props => {
  const { style, properties } = parseProps({ ...props });
  return <ImageBackground {...properties} source={properties.source} style={style} />;
};

export const Animation: FunctionComponent<CustomViewStyle & ViewProps & { name: AnimationList }> = props => {
  const { style, properties } = parseProps({ ...props });
  return <LottieView {...properties} style={style} source={animations[props.name]} />;
};

export const Touchable: FunctionComponent<
  CustomViewStyle & TouchableOpacityProps & TouchableWithoutFeedbackProps & CustomTouchableProps
> = props => {
  const { style, properties } = parseProps({ ...props });
  switch (props.animation) {
    case 'none':
      return <TouchableWithoutFeedback {...properties} style={style} />;
    default:
      return <TouchableOpacity {...properties} style={style} />;
  }
};

export const KeyboardAvoid: FunctionComponent<CustomViewStyle & KeyboardAvoidingViewProps> = props => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView behavior="padding" enabled style={{ flex: 1 }}>
        {props.children}
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export const Image: FunctionComponent<CustomViewStyle & ImageProps & CustomImageProps> = props => {
  const { style, properties } = parseProps({ ...props });

  const [width, setWidth] = React.useState(0);
  const [height, setHeight] = React.useState(0);

  const getSizeBySource = (source: ImageSourcePropType) => {
    return RNImage.resolveAssetSource(source);
  };

  const getSizeByUri = (uri: string): Promise<{ width: number; height: number }> => {
    return new Promise((resolve, reject) => {
      RNImage.getSize(
        uri,
        (width, height) => resolve({ width, height }),
        error => reject(error),
      );
    });
  };

  const getSize = async () => {
    const window = Dimensions.get('window');

    const inputWidth = typeof style.width === 'string' ? Conversion.percToInt(style.width) * window.width : style.width;
    const inputHeight =
      typeof style.height === 'string' ? Conversion.percToInt(style.height) * window.height : style.height;

    const dimensions = props.name
      ? getSizeBySource(images[props.name])
      : props.uri
      ? await getSizeByUri(props.uri)
      : undefined;

    if (!inputWidth && !inputHeight) {
      setWidth(dimensions.width);
      setHeight(dimensions.height);
    } else if (inputWidth && !inputHeight) {
      setWidth(inputWidth);
      setHeight(dimensions.height * (inputWidth / dimensions.width));
    } else if (!inputWidth && inputHeight) {
      setWidth(dimensions.width * (inputHeight / dimensions.height));
      setHeight(inputHeight);
    } else {
      setWidth(inputWidth);
      setHeight(inputHeight);
    }
  };

  getSize();

  // verificar se funciona
  return <RNImage {...({ ...properties, style: { ...style, height, width } } as any)} />;
};

const align = (value: Align): ViewStyle['alignItems'] => {
  return new Map<Align, ViewStyle['alignItems']>([
    ['start', 'flex-start'],
    ['end', 'flex-end'],
    ['center', 'center'],
    ['stretch', 'stretch'],
    ['baseline', 'baseline'],
  ]).get(value);
};

const justify = (value: Justify): ViewStyle['justifyContent'] => {
  return new Map<Justify, ViewStyle['justifyContent']>([
    ['start', 'flex-start'],
    ['end', 'flex-end'],
    ['center', 'center'],
    ['between', 'space-between'],
    ['around', 'space-around'],
    ['evenly', 'space-evenly'],
  ]).get(value);
};

const self = (value: Self): ViewStyle['alignSelf'] => {
  return new Map<Self, ViewStyle['alignSelf']>([
    ['start', 'flex-start'],
    ['end', 'flex-end'],
    ['center', 'center'],
    ['stretch', 'stretch'],
    ['baseline', 'baseline'],
    ['auto', 'auto'],
  ]).get(value);
};

// prettier-ignore
const customViewStylePropNames = [
  'flex','position','direction','grow','wrap','w','width','size','h','height','maxh','maxHeight','minh','minHeight',
  'maxw','maxWidth','minw','minWidth','t','top','l','left','r','right','b','bottom','align','justify','self','m',
  'margin','ml','mr','mt','mb','mx','my','p','padding','pl','pr','pt','pb','px','py','bw','blw','brw','btw','bbw',
  'bxw','byw','bc','blc','btc','brc','bbc','byc','bxc','br','btlr','btrr','bblr','bbrr','btr','bbr','color','elevation',
  'shadow','opacity','transform','pointerEvents','z','name','uri','hitSlop',
];

const parseProps = <T extends CustomViewStyle>(props: T): { style: Partial<ViewStyle>; properties: Partial<T> } => {
  const style: ViewStyle = _.pickBy(
    {
      flex: props.flex || undefined,
      position: props.position || undefined,
      flexDirection: props.direction || undefined,
      flexGrow: props.grow || undefined,
      flexWrap: props.wrap || undefined,
      width: props.w || props.width || props.size || undefined,
      height: props.h || props.height || props.size || undefined,
      maxHeight: props.maxh || props.maxHeight || undefined,
      minHeight: props.minh || props.minHeight || undefined,
      maxWidth: props.maxw || props.maxWidth || undefined,
      minWidth: props.minw || props.minWidth || undefined,
      top: props.t || props.top || undefined,
      left: props.l || props.left || undefined,
      right: props.r || props.right || undefined,
      bottom: props.b || props.bottom || undefined,
      alignItems: props.align ? align(props.align) : undefined,
      justifyContent: props.justify ? justify(props.justify) : undefined,
      alignSelf: props.self ? self(props.self) : undefined,
      margin: props.m || props.margin || undefined,
      marginLeft: props.ml || props.mx || props.m || undefined,
      marginRight: props.mr || props.mx || props.m || undefined,
      marginTop: props.mt || props.my || props.m || undefined,
      marginBottom: props.mb || props.my || props.m || undefined,
      padding: props.p || props.padding || undefined,
      paddingLeft: props.pl || props.px || props.p || undefined,
      paddingRight: props.pr || props.px || props.p || undefined,
      paddingTop: props.pt || props.py || props.p || undefined,
      paddingBottom: props.pb || props.py || props.p || undefined,
      borderWidth: props.bw || undefined,
      borderLeftWidth: props.blw || props.bxw || props.bw || undefined,
      borderRightWidth: props.brw || props.bxw || props.bw || undefined,
      borderTopWidth: props.btw || props.byw || props.bw || undefined,
      borderBottomWidth: props.bbw || props.byw || props.bw || undefined,
      borderColor: props.bc ? colors.parse(props.bc) : undefined,
      borderLeftColor:
        props.blc || props.bxc || props.bc ? colors.parse(props.blc || props.bxc || props.bc) : undefined,
      borderRightColor:
        props.brc || props.bxc || props.bc ? colors.parse(props.brc || props.bxc || props.bc) : undefined,
      borderTopColor: props.btc || props.byc || props.bc ? colors.parse(props.btc || props.byc || props.bc) : undefined,
      borderBottomColor:
        props.bbc || props.byc || props.bc ? colors.parse(props.bbc || props.byc || props.bc) : undefined,
      borderRadius: props.br || undefined,
      borderTopLeftRadius: props.btlr || props.btr || props.br || undefined,
      borderTopRightRadius: props.btrr || props.btr || props.br || undefined,
      borderBottomLeftRadius: props.bblr || props.bbr || props.br || undefined,
      borderBottomRightRadius: props.bbrr || props.bbr || props.br || undefined,
      backgroundColor: props.color ? colors.parse(props.color) : undefined,
      elevation: props.shadow || undefined,
      shadowColor: '#999',
      shadowOffset: { width: props.shadow, height: props.shadow },
      shadowOpacity: 1,
      shadowRadius: 5,
      opacity: props.opacity || undefined,
      transform: props.transform || undefined,
      zIndex: props.z || undefined,
    },
    (value, key) => value !== undefined,
  );

  const properties = _.omit(props, customViewStylePropNames);

  return { style, properties };
};

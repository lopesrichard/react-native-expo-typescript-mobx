import React, { FunctionComponent } from 'react';

import { Image as RNImage, ImageProps, ImageSourcePropType, Dimensions } from 'react-native';

import { ViewStyle, makeViewStyle } from '~/components/grid';

import { ImageList, images } from '~/assets/images';

import * as Conversion from '~/util/conversion';

export type Image = ViewStyle &
  ImageProps & {
    name: ImageList;
    uri: string;
  };

export const Image: FunctionComponent<Image> = ({ name, uri, ...props }) => {
  const style = makeViewStyle(props);

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

    const dimensions = name ? getSizeBySource(images[name]) : uri ? await getSizeByUri(uri) : undefined;

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
  return <RNImage {...({ ...props, style: { ...makeViewStyle(props), height, width } } as any)} />;
};

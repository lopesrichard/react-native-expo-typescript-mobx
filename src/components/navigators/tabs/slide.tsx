import * as React from 'react';
import { Dimensions, Animated } from 'react-native';
import { line, curveBasis } from 'd3-shape';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import Svg, { Path } from 'react-native-svg';
import { Tab } from '~/navigators/tabs';

import { Icon } from '~/components/icon';
import * as View from '~/components/grid';

import { colors } from '~/util/colors';
import { themes } from '~/util/themes';

const { width } = Dimensions.get('window');

const height = 60;
const AnimatedSvg = Animated.createAnimatedComponent(Svg);

// prettier-ignore
const getPath = (tabWidth: number): string => {
  const left = line().x(d => d[0]).y(d => d[1])([[0, 0], [0, 0]]);
  const tab = line().x(d => d[0]).y(d => d[1]).curve(curveBasis)([
    [width, 0],
    [width + 5, 0],
    [width + 10, 10],
    [width + 15, height],
    [width + tabWidth - 15, height],
    [width + tabWidth - 10, 10],
    [width + tabWidth - 5, 0],
    [width + tabWidth, 0],
  ]);
  const right = line().x(d => d[0]).y(d => d[1])([
    [width + tabWidth, 0 ],
    [width * 2, 0 ],
    [width * 2, height ],
    [0, height ],
    [0, 0 ],
  ]);
  return `${left} ${tab} ${right}`;
};

export type TabSlideNavigatorProps = BottomTabBarProps & {
  tabs: Tab[];
};

export class TabSlideNavigator extends React.PureComponent<TabSlideNavigatorProps> {
  value = new Animated.Value(0);

  render() {
    const { props, value } = this;
    const translateX = value.interpolate({ inputRange: [0, width], outputRange: [-width, 0] });
    return (
      <>
        <View.Column h={height} w={width} color="white">
          <AnimatedSvg width={width * 2} height={height} style={{ transform: [{ translateX }] }}>
            <Path fill={colors[themes.primary.color]} d={getPath(width / props.tabs.length)} />
          </AnimatedSvg>
          <View.Absolute>
            <_TabSlideNavigator {...{ ...props, value }} />
          </View.Absolute>
        </View.Column>
        <View.SafeArea color="white" />
      </>
    );
  }
}

export type _TabSlideNavigatorProps = BottomTabBarProps & {
  value: Animated.Value;
  tabs: Tab[];
};

class _TabSlideNavigator extends React.PureComponent<_TabSlideNavigatorProps> {
  values: Animated.Value[] = [];

  constructor(props: _TabSlideNavigatorProps) {
    super(props);
    this.values = props.tabs.map((tab, index) => new Animated.Value(index === 0 ? 1 : 0));
  }

  componentDidUpdate(prevProps: _TabSlideNavigatorProps) {
    if (prevProps.state.index !== this.props.state.index) {
      this.onPress(this.props.state.index);
    }
  }

  onPress = (index: number) => {
    const { value, state, navigation, tabs } = this.props;
    const route = state.routes.find((route, i) => i === index);
    navigation.navigate(route.name);
    Animated.sequence([
      Animated.parallel(this.values.map(v => Animated.timing(v, { toValue: 0, duration: 100, useNativeDriver: true }))),
      Animated.parallel([
        Animated.spring(value, { toValue: (width / tabs.length) * index, useNativeDriver: true }),
        Animated.spring(this.values[index], { toValue: 1, useNativeDriver: true }),
      ]),
    ]).start();
  };

  render() {
    const { tabs } = this.props;
    return (
      <View.Row>
        {tabs.map((tab, key) => {
          const translateY = this.values[key].interpolate({
            inputRange: [0, 1],
            outputRange: [height, 0],
            extrapolate: 'clamp',
          });
          return (
            <React.Fragment {...{ key }}>
              <View.Touchable onPress={() => this.onPress(key)}>
                <View.Animated flex={1} h={height} align="center" justify="center">
                  <Icon name={tab.icon} color="white" size={20} />
                </View.Animated>
              </View.Touchable>
              <View.Animated
                position="absolute"
                align="center"
                transform={[{ translateY }]}
                w={width / tabs.length}
                l={(width / tabs.length) * key}>
                <View.Center color="primary" size={40} br={20}>
                  <Icon name={tab.icon} color="white" size={20} />
                </View.Center>
              </View.Animated>
            </React.Fragment>
          );
        })}
      </View.Row>
    );
  }
}

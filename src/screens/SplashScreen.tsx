import React, { FC, useRef, useState, useEffect } from 'react';
import { StyleSheet, View, Animated } from 'react-native';
import { mColors } from '../utils';
import { logo } from '../assets/images/gif';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  logo: {
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center'
  },
  maskImageStyle: {
    height: 100,
    width: 100,
  }
});

const SplashScreen: FC = () => {
  const loadingProgress = useRef(new Animated.Value(1)).current;
  const [animationDone, setAnimationDone] = useState<boolean>(false);

  Animated.timing(loadingProgress, {
    toValue: 100,
    duration: 1000,
    useNativeDriver: true
  }).start();


  const imageScale = {
    transform: [
      {
        scale: loadingProgress.interpolate({
          inputRange: [0, 10, 100],
          outputRange: [1, 0.8, 70],
        }),
      },
    ],
  };

  const fullScreenBackgroundLayer = animationDone ? null : (
    <View style={[{ backgroundColor: mColors.white }]} />
  );

  useEffect(() => {
    Animated.timing(loadingProgress, {
      toValue: 100,
      duration: 2000,
      useNativeDriver: true,
    }).start(() => {
      setAnimationDone(true)
    });
  }, [])


  return (
    <View style={styles.wrapper}>
      {fullScreenBackgroundLayer}
      <View style={styles.logo}>
        <Animated.Image
          style={[styles.maskImageStyle, imageScale]}
          source={logo}
        />
      </View>
    </View>
  )
};

export default SplashScreen;

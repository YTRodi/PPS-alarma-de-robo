/* eslint-disable camelcase */
import React, { useCallback, useEffect, useState } from 'react';
import { Animated } from 'react-native';

import * as SplashScreen from 'expo-splash-screen';
import Constants from 'expo-constants';
import AppLoading from 'expo-app-loading';
import { Asset } from 'expo-asset';
import {
  useFonts,
  Manrope_200ExtraLight,
  Manrope_300Light,
  Manrope_400Regular,
  Manrope_500Medium,
  Manrope_600SemiBold,
  Manrope_700Bold,
  Manrope_800ExtraBold,
} from '@expo-google-fonts/manrope';

import { useFadeAnimation } from '../../hooks';
import { BASE_FADE_ANIMATION_TIME } from '../../hooks/useFadeAnimation';
import { AppLogo, Flex, H4 } from '../../components';

const sourceIcon = require('../../../assets/images/icon.png');

SplashScreen.preventAutoHideAsync().catch(console.error);

interface Props {
  children: React.ReactNode;
}

function AnimatedAppLoader(props: Props) {
  const [isSplashReady, setIsSplashReady] = useState(false);
  const [fontsLoaded] = useFonts({
    Manrope_200ExtraLight,
    Manrope_300Light,
    Manrope_400Regular,
    Manrope_500Medium,
    Manrope_600SemiBold,
    Manrope_700Bold,
    Manrope_800ExtraBold,
  });

  const startAsync = useCallback(
    () => Asset.fromModule(sourceIcon).downloadAsync(),
    [sourceIcon]
  );

  const onFinish = useCallback(async () => {
    setIsSplashReady(true);
    await SplashScreen.hideAsync();
  }, []);

  if (!isSplashReady && !fontsLoaded) {
    return (
      <AppLoading
        autoHideSplash={false}
        startAsync={startAsync}
        onError={console.error}
        onFinish={onFinish}
      />
    );
  }

  return <AnimatedSplashScreen {...props} />;
}

function AnimatedSplashScreen({ children }: Props) {
  const fadeAnimation = useFadeAnimation();
  const [isAppReady, setAppReady] = useState(false);
  const [isSplashAnimationComplete, setIsSplashAnimationComplete] =
    useState(false);

  useEffect(() => {
    if (isAppReady) {
      setIsSplashAnimationComplete(true);
    }
  }, [isAppReady]);

  const onLoadStart = useCallback(() => fadeAnimation.show(), []);
  const onLoadEnd = useCallback(() => {
    setTimeout(async () => {
      try {
        await SplashScreen.hideAsync();
      } catch (e) {
        console.error(e);
      } finally {
        fadeAnimation.hide(({ finished }) => finished && setAppReady(true));
      }
    }, BASE_FADE_ANIMATION_TIME);
  }, []);

  return (
    <Flex css={{ flex: 1 }}>
      {isAppReady && children}
      {!isSplashAnimationComplete && (
        <Flex
          direction='column'
          justify='around'
          align='center'
          css={{
            flex: 1,
            bc: Constants.manifest?.splash?.backgroundColor,
          }}
        >
          <Animated.View style={fadeAnimation.style}>
            <H4>Rodi Yago</H4>
          </Animated.View>
          <AppLogo
            animated
            onLoadStart={onLoadStart}
            onLoadEnd={onLoadEnd}
            styles={fadeAnimation.style}
          />
          <Animated.View style={fadeAnimation.style}>
            <H4>División 4B</H4>
          </Animated.View>
        </Flex>
      )}
    </Flex>
  );
}

export default AnimatedAppLoader;

import { StatusBar } from 'expo-status-bar';
import LottieView from 'lottie-react-native';
import { useEffect } from 'react';
import { Animated } from 'react-native';
import { useTheme } from '../../../stitches.config';
import { isIOS } from '../../helpers';
import { useFadeAnimation } from '../../hooks';
import { Flex, Sub1 } from '../Layout';

const spinnerSource = require('../../../assets/lottie/loading.json');

interface Props {
  title?: string;
}

function FullPageSpinner({ title }: Props) {
  const { colors } = useTheme();
  const { show, style } = useFadeAnimation();

  useEffect(() => {
    show();
  }, []);

  return (
    <Animated.View
      style={{ flex: 1, ...style, backgroundColor: colors.secondary }}
    >
      <StatusBar style='light' />
      <Flex
        direction='column'
        justify='center'
        align='center'
        css={{ flex: 1 }}
      >
        <LottieView
          source={spinnerSource}
          autoPlay
          loop
          style={{ transform: [{ scale: isIOS ? 0.5 : 2 }] }}
        />

        {title && <Sub1>{title}</Sub1>}
      </Flex>
    </Animated.View>
  );
}

export default FullPageSpinner;

import LottieView from 'lottie-react-native';
import { useEffect } from 'react';
import { Animated } from 'react-native';
import { useFadeAnimation } from '../../hooks';
import { Flex, Sub1 } from '../Layout';

const spinnerSource = require('../../../assets/lottie/orange-loading.json');

interface Props {
  title?: string;
}

function FullPageSpinner({ title }: Props) {
  const { show, style } = useFadeAnimation();

  useEffect(() => {
    show();
  }, []);

  return (
    <Animated.View style={{ flex: 1, ...style }}>
      <Flex
        direction='column'
        justify='center'
        align='center'
        css={{ flex: 1 }}
      >
        <Flex css={{ size: 150 }}>
          <LottieView source={spinnerSource} autoPlay loop />
        </Flex>

        {title && <Sub1>{title}</Sub1>}
      </Flex>
    </Animated.View>
  );
}

export default FullPageSpinner;

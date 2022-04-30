import { StackScreenProps } from '@react-navigation/stack';
import { useCallback, useEffect, useMemo } from 'react';
import { Animated, ImageResizeMode } from 'react-native';
import { RootStackParams } from '../../navigator/StackNavigator';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Flex, Image, Touchable } from '../../components';
import { useFadeAnimation } from '../../hooks';

interface Props extends StackScreenProps<RootStackParams, 'Home'> {}

function Home({ navigation }: Props) {
  const { show, style } = useFadeAnimation({ hidden: true });
  const { bottom } = useSafeAreaInsets();

  useEffect(() => {
    show();
  }, []);

  const goToGoodScreen = useCallback(() => navigation.navigate('Good'), []);
  const goToBadScreen = useCallback(() => navigation.navigate('Bad'), []);
  const commonImageProps = useMemo(
    () => ({
      resizeMode: 'contain' as ImageResizeMode,
      css: { flex: 1 },
    }),
    []
  );

  return (
    <Animated.View style={{ ...style, flex: 1, paddingBottom: bottom }}>
      <Flex
        direction='column'
        justify='center'
        align='center'
        css={{ flex: 1 }}
      >
        <Touchable onPress={goToGoodScreen} css={{ flex: 1 }}>
          <Image
            source={require('../../../assets/up.jpg')}
            {...commonImageProps}
          />
        </Touchable>
        <Touchable onPress={goToBadScreen} css={{ flex: 1 }}>
          <Image
            source={require('../../../assets/down.jpg')}
            {...commonImageProps}
          />
        </Touchable>
      </Flex>
    </Animated.View>
  );
}

export default Home;

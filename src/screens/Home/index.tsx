import { StackScreenProps } from '@react-navigation/stack';
import { Animated, Switch, Vibration } from 'react-native';
import { Gyroscope } from 'expo-sensors';
import { Audio } from 'expo-av';
import { RootStackParams } from '../../navigator/StackNavigator';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Button, Flex, TextInput } from '../../components';
import { useFadeAnimation, useToggle } from '../../hooks';
import { useEffect, useState } from 'react';
import { Subscription } from 'expo-sensors/build/Pedometer';
import { useTheme } from '../../../stitches.config';
import { getCredential, reAuthenticate } from '../../auth';
import { useAuth } from '../../context/AuthProvider';
import { sleep } from '../../helpers';
import { useToast } from 'react-native-toast-notifications';

interface Props extends StackScreenProps<RootStackParams, 'Home'> {}

function Home({ navigation }: Props) {
  const { colors } = useTheme();
  const { user } = useAuth();
  const toast = useToast();
  const [active, toggleActive] = useToggle();
  const { show, style } = useFadeAnimation({ hidden: true });
  const { bottom } = useSafeAreaInsets();
  const [sound, setSound] = useState<Audio.Sound | null>(null);
  const [subscription, setSubscription] = useState<Subscription | null>(null);
  const [password, setPassword] = useState('');
  const [isValidating, setIsValidating] = useState(false);

  function _subscribe() {
    setSubscription(
      Gyroscope.addListener(async gyroscopeData => {
        if (gyroscopeData.z < -1) {
          const { sound } = await Audio.Sound.createAsync(
            require('../../../assets/sounds/epa.m4a')
          );
          setSound(sound);
          await sound.playAsync();
        }

        if (gyroscopeData.z > 1) {
          const { sound } = await Audio.Sound.createAsync(
            require('../../../assets/sounds/left.m4a')
          );
          setSound(sound);
          await sound.playAsync();
        }

        if (gyroscopeData.x > 1) {
          const { sound } = await Audio.Sound.createAsync(
            require('../../../assets/sounds/left.m4a')
          );
          setSound(sound);
          await sound.playAsync();
        }
      })
    );
  }

  function _unsubscribe() {
    subscription && subscription.remove();
    setSubscription(null);
  }

  useEffect(() => {
    Gyroscope.setUpdateInterval(100);

    if (active) {
      _subscribe();
    } else {
      _unsubscribe();
    }
    return () => _unsubscribe();
  }, [active]);

  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  useEffect(() => {
    show();
  }, []);

  function handleValueChange() {
    const credential = getCredential({ email: user!.email!, password });

    sleep().then(() => {
      setIsValidating(true);
      reAuthenticate(user!, credential)
        .then(toggleActive)
        .catch(() => {
          Vibration.vibrate(200);
          toast.show('Contraseña incorrecta', { type: 'danger' });
        })
        .finally(() => setIsValidating(false));
    });
  }

  return (
    <Animated.View
      style={{
        flex: 1,
        paddingBottom: bottom,
        backgroundColor: colors.secondary,
        ...style,
      }}
    >
      <Flex
        direction='column'
        justify='evenly'
        align='center'
        css={{ flex: 1 }}
      >
        {active && (
          <Flex direction='column'>
            <TextInput
              label='Ingrese la contraseña para desactivar!'
              placeholder='Contraseña'
              secureTextEntry
              autoCompleteType='off'
              onChangeText={setPassword}
            />
            {password.length >= 6 && (
              <Button
                variant='default'
                text='Verificar contraseña'
                onPress={handleValueChange}
                loading={isValidating}
              />
            )}
          </Flex>
        )}

        <Switch
          trackColor={{
            false: colors.quatenary,
            true: colors.primary,
          }}
          thumbColor={colors.quatenary}
          disabled={active}
          onValueChange={toggleActive}
          value={active}
          style={{
            transform: [{ scale: 3.5 }],
          }}
        />
      </Flex>
    </Animated.View>
  );
}

export default Home;

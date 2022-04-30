import { createStackNavigator } from '@react-navigation/stack';
import { useToast } from 'react-native-toast-notifications';
import { useAuth } from '../context/AuthProvider';
import { useAsync } from '../hooks';
import { Button, FullPageSpinner } from '../components';
import { Home, Good, Bad } from '../screens';
import { mapAuthError, sleep } from '../helpers';

export type RootStackParams = {
  Home: undefined;
  Good: undefined;
  Bad: undefined;
};

const Stack = createStackNavigator<RootStackParams>();

function StackNavigator() {
  const { logout } = useAuth();
  const { isLoading, isError, error, run } = useAsync();
  const toast = useToast();

  if (isLoading) {
    return <FullPageSpinner title='Saliendo' />;
  }

  if (isError) {
    const errorMessage = mapAuthError(error);
    toast.show(errorMessage, { type: 'danger' });
  }

  return (
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen
        name='Home'
        component={Home}
        options={{
          headerRight: () => (
            <Button
              variant='text'
              text='Salir'
              onPress={() => run(sleep().then(logout))}
            />
          ),
        }}
      />
      <Stack.Screen
        name='Good'
        component={Good}
        options={{ title: 'Cosas lindas del edificio' }}
      />
      <Stack.Screen name='Bad' component={Bad} />
    </Stack.Navigator>
  );
}

export default StackNavigator;

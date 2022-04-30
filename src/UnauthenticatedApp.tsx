import * as Yup from 'yup';
import { useEffect } from 'react';
import { Animated, Vibration } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useToast } from 'react-native-toast-notifications';
import { useFormik } from 'formik';
import { useAsync, useFadeAnimation } from './hooks';
import { useAuth } from './context/AuthProvider';
import { mapAuthError } from './helpers';
import {
  AppLogo,
  Button,
  Flex,
  HardcodedPersons,
  Sub1,
  TextInput,
} from './components';

const AuthSchema = Yup.object().shape({
  email: Yup.string()
    .email('Correo electrónico inválido')
    .required('El correo electrónico es obligatorio'),
  password: Yup.string()
    .min(6, 'La contraseña debe tener al menos 6 dígitos')
    .required('La contraseña es obligatoria'),
});

const initialValues = {
  email: '',
  password: '',
};

function UnauthenticatedApp() {
  const { show, style } = useFadeAnimation();
  const { login } = useAuth();
  const { isLoading, isError, error, run } = useAsync();
  const toast = useToast();
  const {
    values: formValues,
    errors: formErrors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isValidating,
    isValid,
    setValues,
  } = useFormik({
    initialValues,
    validationSchema: AuthSchema,
    onSubmit: formValues => run(login(formValues)),
  });

  useEffect(() => {
    if (isError) {
      const errorMessage = mapAuthError(error);
      Vibration.vibrate(200);
      toast.show(errorMessage, { type: 'danger' });
    }
  }, [isError, error]);

  useEffect(() => {
    show();
  }, []);

  const commonCss = { color: '$whiteA12' };

  return (
    <Animated.View style={{ flex: 1, ...style }}>
      <StatusBar animated style='light' />
      <Flex direction='column' css={{ flex: 1, backgroundColor: '$blackA12' }}>
        <Flex direction='column' css={{ flex: 1, mh: '$16' }}>
          <Flex direction='column' align='center' css={{ mt: 52 }}>
            <Sub1 css={{ ...commonCss }}>Bienvenido a</Sub1>
            <Sub1 css={{ mb: '$16', ...commonCss }}>
              Relevamiento Visual App
            </Sub1>
            <AppLogo />
          </Flex>

          <Flex direction='column' css={{ mt: '$16' }}>
            <Sub1 css={{ ...commonCss, mb: '$8' }}>Credenciales</Sub1>
            <TextInput
              keyboardType='email-address'
              placeholder='Correo electrónico'
              returnKeyType='next'
              autoCompleteType='off'
              css={{ marginBottom: '$8' }}
              value={formValues.email}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              error={touched.email && Boolean(formErrors.email)}
              helperText={formErrors.email}
            />
            <TextInput
              secureTextEntry
              placeholder='Contraseña'
              autoCompleteType='off'
              value={formValues.password}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              error={touched.password && Boolean(formErrors.password)}
              helperText={formErrors.password}
            />
          </Flex>

          <Flex justify='center' css={{ mt: '$16' }}>
            <Button
              text='Ingresar'
              full
              loading={isLoading || isValidating}
              disabled={isLoading || isValidating || !isValid}
              onPress={() => handleSubmit()}
            />
          </Flex>

          <HardcodedPersons
            onSelectPerson={({ email, password }) =>
              setValues({ email, password })
            }
          />
        </Flex>
      </Flex>
    </Animated.View>
  );
}

export default UnauthenticatedApp;

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AnimatedAppLoader from './SplashProvider';
import ToastProvider from './ToastProvider';
import ThemeProvider from './ThemeProvider';
import { AuthProvider } from './AuthProvider';

const AppProviders: React.FC = ({ children }) => {
  return (
    <AnimatedAppLoader>
      <SafeAreaProvider>
        <NavigationContainer>
          <ToastProvider>
            <ThemeProvider>
              <AuthProvider>{children}</AuthProvider>
            </ThemeProvider>
          </ToastProvider>
        </NavigationContainer>
      </SafeAreaProvider>
    </AnimatedAppLoader>
  );
};

export default AppProviders;

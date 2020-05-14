import React from 'react';
import { StatusBar } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

//Theming
import { ThemeProvider } from 'styled-components/native';
import { useColorScheme, AppearanceProvider } from 'react-native-appearance';
import getTheme from './src/utils/themes';
import Routes from './src/routes';

//Moment
import moment from 'moment';
require('moment/locale/pt-br');
moment.locale('pt-br');


export default function App() {
  const Stack = createStackNavigator();
  const scheme = useColorScheme();
  const theme = getTheme(scheme);

  return (
    <AppearanceProvider >
      <ThemeProvider theme={theme}>
        <StatusBar
          barStyle={'light-content'}
          backgroundColor={theme.colors.statusBar}
        />
        <NavigationContainer theme={theme}>
          <Routes />
        </NavigationContainer>
      </ThemeProvider>
    </AppearanceProvider>
  );
}

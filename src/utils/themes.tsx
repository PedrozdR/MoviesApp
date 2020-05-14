/* eslint-disable prettier/prettier */
import { DefaultTheme, DarkTheme } from '@react-navigation/native';
import { Theme } from '@react-navigation/native/lib/typescript/src/types';
import { ColorSchemeName } from 'react-native';

export default function getTheme(scheme: string) {
  if (scheme === 'dark') {
    const darkMode: Theme = {
      ...DarkTheme,
      colors: {
        primary: '#30638E',
        background: '#121212',
        card: '#212121',
        text: '#fff',
        border: '#fff',
        statusBar: '#003D5B',
        overlay: "#212121",
      },
    };
    return darkMode;
  } else {
    const lightMode: Theme = {
      ...DefaultTheme,
      colors: {
        primary: '#30638E',
        background: '#fff',
        card: '#f1f1f1',
        text: '#000',
        border: '#00000024',
        statusBar: '#003D5B',
        overlay: "#c1c1c1",

      },
    };
    return lightMode;
  }
}

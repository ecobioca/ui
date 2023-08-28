import {
  MD3LightTheme as DefaultTheme,
  MD3Theme,
} from 'react-native-paper'


//TODO: WEB3-51 - use Bioca colors as theme
export const theme: MD3Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#E56B2E',
    secondary: '#1D1D1D',
  },
}

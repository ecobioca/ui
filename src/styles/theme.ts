import {
  MD3LightTheme as DefaultTheme,
  MD3Theme,
} from 'react-native-paper'

//TODO interessante personalizar theme para manter padrão nos componentes
export const theme: MD3Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'black',
    secondary: 'orange',
  },
}

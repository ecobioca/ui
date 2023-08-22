import { StatusBar } from 'expo-status-bar'
import {
  MD3LightTheme as DefaultTheme,
  MD3Theme,
  PaperProvider,
} from 'react-native-paper'

import Home from './src/screens/Home'

//TODO interessante personalizar theme para manter padrão nos componentes
const theme: MD3Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'black',
    secondary: 'orange',
  },
}

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <StatusBar style="auto" />
      <Home />
    </PaperProvider>
  )
}

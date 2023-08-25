import {
  MD3LightTheme as DefaultTheme,
  MD3Theme,
} from 'react-native-paper'

// const colors = {
//   primary: {
//       100: '#E56B2E',
//       150: '#1E2D32'

//   },
//   beige: {
//       100: '#ECE8DE'
//   },
//   secondary: {
//       100: '#1D1D1D',
//   },
//   gray: {
//       100: '#1D1D1DCC',
//       200: '#1D1D1D99',
//       300: '#1D1D1D1A',
//   },
//   lightBlue: {
//       100: '#F4F5F9',
//   },
//   yellow: {
//       100: '#F1C40F',
//   },
//   white: {
//       100: '#ffffff'
//   },
//   grey: {
//       100: '#656669',
//       150: '#455A64',
//       200: '#263238'
//   },
//   orange: {
//       100:'#E56B2E'
//   },
//   green: {
//       100: '#34A100'
//   }
// }


//TODO interessante personalizar theme para manter padrão nos componentes
export const theme: MD3Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#E56B2E',
    secondary: '#1D1D1D',
  },
}

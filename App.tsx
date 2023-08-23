import { StatusBar } from 'expo-status-bar'

import { BiocaThemeProvider } from './src/contexts/BiocaThemeContext'
import Home from './src/screens/Home'

export default function App() {
  return (
    <BiocaThemeProvider>
      <StatusBar style="auto" />
      <Home />
    </BiocaThemeProvider>
  )
}

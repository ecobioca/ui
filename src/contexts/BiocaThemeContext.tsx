import React from 'react'
import { PaperProvider } from 'react-native-paper'

import { theme } from '../styles/theme'

interface BiocaThemeContextSchema {}

const ThemeContext = React.createContext({} as BiocaThemeContextSchema)

export const BiocaThemeProvider = ({ children }: React.PropsWithChildren) => {
  return (
    <ThemeContext.Provider value={{}}>
      <PaperProvider theme={theme}>{children}</PaperProvider>
    </ThemeContext.Provider>
  )
}

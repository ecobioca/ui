import React from 'react'
import { PaperProvider } from 'react-native-paper'

import { theme } from '../../styles/theme'

export default function BiocaThemeProvider({
  children,
}: React.PropsWithChildren) {
  return <PaperProvider theme={theme}>{children}</PaperProvider>
}

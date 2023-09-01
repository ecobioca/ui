import { useFonts } from 'expo-font'
import { useColorScheme } from 'react-native'
import { TamaguiProvider, Theme } from 'tamagui'

import config from '../../tamagui.config'

export default function BiocaThemeProvider({
  children,
}: React.PropsWithChildren) {
  const colorScheme = useColorScheme()

  const [loaded] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
  })

  if (!loaded) {
    return null
  }

  return (
    <TamaguiProvider config={config}>
      <Theme name={colorScheme === 'dark' ? 'dark' : 'light'}>{children}</Theme>
    </TamaguiProvider>
  )
}

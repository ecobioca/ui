import { createAnimations } from '@tamagui/animations-react-native'
import { createInterFont } from '@tamagui/font-inter'
import { createMedia } from '@tamagui/react-native-media-driver'
import { shorthands } from '@tamagui/shorthands'
import { themes, tokens as Ttokens } from '@tamagui/themes'
import { createTamagui, createTokens } from 'tamagui'

const animations = createAnimations({
  bouncy: {
    type: 'spring',
    damping: 100,
    mass: 0.9,
    stiffness: 1000,
  },
  lazy: {
    type: 'spring',
    damping: 20,
    stiffness: 60,
  },
  quick: {
    type: 'spring',
    damping: 20,
    mass: 1.2,
    stiffness: 250,
  },
})

const headingFont = createInterFont()

const bodyFont = createInterFont()

const tokens = createTokens({
  ...Ttokens,
  color: {
    ...Ttokens.color,
    primary: '#FB6B2F',
    secondary: '#9DDEEB',
    terciary: '#EEE9DE',
    greenLight: '#85E0A3',
    white: '#fff',
    black: '#000',
    gray100: '#E3E3E3',
    gray200: '#C8C8C8',
    gray300: '#A4A4A4',
    gray400: '#818181',
    gray500: '#515151',
    gray600: '#383838',
    gray700: '#313131',
    gray800: '#050505'
  },

})

const config = createTamagui({
  animations,
  defaultTheme: 'dark',
  shouldAddPrefersColorThemes: false,
  themeClassNameOnRoot: false,
  shorthands,
  fonts: {
    heading: headingFont,
    body: bodyFont,
  },
  themes,
  tokens,
  media: createMedia({
    xs: { maxWidth: 660 },
    sm: { maxWidth: 800 },
    md: { maxWidth: 1020 },
    lg: { maxWidth: 1280 },
    xl: { maxWidth: 1420 },
    xxl: { maxWidth: 1600 },
    gtXs: { minWidth: 660 + 1 },
    gtSm: { minWidth: 800 + 1 },
    gtMd: { minWidth: 1020 + 1 },
    gtLg: { minWidth: 1280 + 1 },
    short: { maxHeight: 820 },
    tall: { minHeight: 820 },
    hoverNone: { hover: 'none' },
    pointerCoarse: { pointer: 'coarse' },
  }),
})

export type AppConfig = typeof config

declare module 'tamagui' {
  // overrides TamaguiCustomConfig so your custom types
  // work everywhere you import `tamagui`
  interface TamaguiCustomConfig extends AppConfig { }
}
export default config

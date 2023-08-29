import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'
import { View } from 'react-native'
import {
  Button as PaperButton,
  ButtonProps as PaperButtonProps,
} from 'react-native-paper'
import { match, P } from 'ts-pattern'

type IconProps =
  | {
      materialIconName?: keyof typeof MaterialIcons.glyphMap
      icon?: undefined
    }
  | {
      materialIconName?: undefined
      icon?: React.ReactNode
    }
type ButtonProps = Omit<PaperButtonProps, 'icon' | 'children'> & {
  onPress?: () => void
  alignIcon?: 'left' | 'right'
  loading?: boolean
} & IconProps

export default function Button({
  icon,
  materialIconName,
  alignIcon = 'left',
  loading = false,
  disabled,
  onPress,
  children,
  mode = 'contained',
  ...rest
}: React.PropsWithChildren<ButtonProps>) {
  const matchValues = {
    icon: Boolean(icon || materialIconName),
    children: Boolean(children),
  }

  const iconGap = match(matchValues)
    .with({ icon: true, children: false }, () => -16)
    .with({ icon: true, children: true }, () => 8)
    .otherwise(() => 0)

  return (
    <View style={{ paddingHorizontal: 20, width: '100%' }}>
      <PaperButton
        {...rest}
        disabled={loading || disabled}
        icon={() =>
          match({ icon, materialIconName })
            .with({ icon: P.not(P.nullish) }, () => icon)
            .with({ materialIconName: P.not(P.nullish) }, () => (
              <MaterialIcons
                name={materialIconName}
                size={20}
                color={mode == 'outlined' ? '#000' : '#fff'}
              />
            ))
            .otherwise(() => undefined)
        }
        mode={mode}
        onPress={onPress}
        loading={loading}
        uppercase
        theme={{
          colors: {
            primary: '#000',
          },
        }}
        style={{
          borderRadius: 4,
        }}
        labelStyle={{
          fontSize: 14,
          fontWeight: '700',
        }}
        contentStyle={{
          gap: iconGap,
          flexDirection: alignIcon === 'right' ? 'row-reverse' : 'row',
          height: 60,
        }}
      >
        {children}
      </PaperButton>
    </View>
  )
}

import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'
import { View } from 'react-native'
import {
  Button as PaperButton,
  ButtonProps as PaperButtonProps,
} from 'react-native-paper'

export interface ButtonProps
  extends Omit<PaperButtonProps, 'icon' | 'children'> {
  title?: string | React.ReactNode
  onPress?: () => void
  materialIconName?: keyof typeof MaterialIcons.glyphMap
  icon?: React.ReactNode
  alignIcon?: 'left' | 'right'
  loading?: boolean
}

export default function Button({
  title,
  icon,
  materialIconName,
  alignIcon = 'left',
  loading = false,
  onPress,
  mode = 'contained',
  ...rest
}: ButtonProps) {
  const handleIcon = React.useCallback(() => {
    if (icon) {
      return icon
    }
    if (materialIconName) {
      return <MaterialIcons name={materialIconName} size={20} color={'#fff'} />
    }
    return undefined
  }, [icon, materialIconName])

  const handleIconGap = React.useCallback((): number => {
    const icon = handleIcon()
    if (icon && title) {
      return 12
    }
    if (title) {
      return 0
    }
    if (icon) {
      return -12
    }
    return 0
  }, [handleIcon, title])

  return (
    <View style={{ paddingHorizontal: 20, width: '100%' }}>
      <PaperButton
        disabled={loading}
        {...rest}
        icon={handleIcon}
        mode={mode}
        onPress={onPress}
        loading={loading}
        uppercase
        style={{
          borderRadius: 4,
        }}
        labelStyle={{
          fontSize: 14,
          fontWeight: '700',
        }}
        contentStyle={{
          gap: handleIconGap(),
          flexDirection: alignIcon === 'right' ? 'row-reverse' : 'row',
          height: 60,
        }}
      >
        {title}
      </PaperButton>
    </View>
  )
}

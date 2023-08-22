import { MaterialIcons } from '@expo/vector-icons'
import {
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

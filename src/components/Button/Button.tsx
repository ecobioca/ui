import { Text, TouchableOpacity } from 'react-native'

import { ButtonProps } from './Button.types'

const Button = ({ label, onPress }: ButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text>{label}</Text>
    </TouchableOpacity>
  )
}

export default Button

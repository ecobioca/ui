import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'
import {
  Spinner,
  styled,
  Button as TButton,
  ButtonProps as TButtonProps,
  Text,
} from 'tamagui'
import { match, P } from 'ts-pattern'

const StyledButton = styled(TButton, {
  unstyled: true,
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'row',
  //height: 60,
  borderRadius: '$2',
  color: '$white',
  bg: '$black',
  paddingHorizontal: 16,
  paddingVertical: 10,
  //animation: 'transitionSlow',
  borderWidth: 0,
  borderColor: '$black',

  focusStyle: {
    borderWidth: 4,
    borderColor: '#FB6B2F',
  },
  variants: {
    variant: {
      contained: {
        bg: '$black',
        color: '$white',
        hoverStyle: {
          opacity: 0.7,
          bg: '$black',
        },
        pressStyle: {
          opacity: 0.7,
          bg: '$black',
        },
      },
      outlined: {
        borderWidth: 2,
        borderColor: '$black',
        bg: 'transparent',
        color: '$black',
        hoverStyle: {
          bg: 'transparent',
          borderColor: '$gray500',
          opacity: 0.7,
        },
        pressStyle: {
          bg: 'transparent',
          borderColor: '$black',
          opacity: 0.7,
        },
      },
    },
  } as const,
})

type IconProps =
  | {
      materialIconName?: keyof typeof MaterialIcons.glyphMap
      icon?: undefined
    }
  | {
      materialIconName?: undefined
      icon?: React.ReactNode
    }
type ButtonProps = Omit<TButtonProps, 'icon' | 'children' | 'variant'> & {
  onPress?: () => void
  loading?: boolean
  variant?: 'contained' | 'outlined'
  size?: 'sm' | 'md' | 'lg' | 'full'
} & IconProps

export default function Button({
  children,
  icon,
  materialIconName,
  variant = 'contained',
  size = 'full',
  disabled,
  loading,
  ...rest
}: React.PropsWithChildren<ButtonProps>) {
  const buttonSize = match(size)
    .with('sm', () => ({ width: 120 }))
    .with('md', () => ({ width: 130, height: 50 }))
    .with('lg', () => ({ width: 200, height: 60 }))
    .with('full', () => ({ width: '100%', height: 60 }))
    .exhaustive()

  const disabledStyle = match({ disabled, variant, loading })
    .with({ disabled: true, variant: 'contained' }, () => ({
      backgroundColor: 'rgba(0, 0, 0, 0.3)',
    }))
    .with({ disabled: true, variant: 'outlined' }, () => ({ opacity: 0.3 }))
    .with({ loading: true, variant: 'contained' }, () => ({
      backgroundColor: 'rgba(0, 0, 0, 0.3)',
    }))
    .with({ loading: true, variant: 'outlined' }, () => ({ opacity: 0.3 }))
    .otherwise(() => ({}))

  return (
    <StyledButton
      {...buttonSize}
      icon={() =>
        match({ icon, materialIconName, loading })
          .with({ loading: true }, () => (
            <Spinner
              size={'small'}
              color={variant === 'outlined' ? '#000' : '#fff'}
            />
          ))
          .with({ icon: P.not(P.nullish) }, () => icon)
          .with({ materialIconName: P.not(P.nullish) }, () => (
            <MaterialIcons
              name={materialIconName}
              size={20}
              color={variant === 'outlined' ? '#000' : '#fff'}
            />
          ))

          .otherwise(() => null)
      }
      style={{
        gap: !icon && !materialIconName && !loading ? -8 : 0,
        ...disabledStyle,
      }}
      // eslint-disable-next-line
      // @ts-ignore
      variant={variant}
      disabled={disabled || loading}
      {...rest}
    >
      {typeof children === 'string' ? (
        <Text
          fontSize={14}
          fontWeight={'bold'}
          color={variant === 'outlined' ? '#000' : '#fff'}
          lineHeight={26}
          textTransform="uppercase"
        >
          {children}
        </Text>
      ) : (
        { children }
      )}
    </StyledButton>
  )
}

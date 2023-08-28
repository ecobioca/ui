import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'
import { Alert, StyleSheet, View } from 'react-native'
import { Divider } from 'react-native-paper'

import { Button } from '../components'

export default function Home() {
  return (
    <View style={styles.container}>
      <>
        <Button
          onPress={() => setTimeout(() => Alert.alert('aa'), 200)}
          materialIconName="add-circle"
          alignIcon="right"
        >
          Adicionar
        </Button>
        <Divider style={{ height: 1 }} />
        <Button
          onPress={() => setTimeout(() => Alert.alert('oi lucca'), 200)}
          mode="outlined"
        >
          Continuar
        </Button>
        <Divider style={{ height: 1 }} />
        <Button
          icon={
            <MaterialIcons name={'arrow-downward'} size={20} color={'#fff'} />
          }
          onPress={() => setTimeout(() => Alert.alert('oi kaique'), 200)}
        >
          Voltar
        </Button>
        <Divider style={{ height: 1 }} />
        <Button
          loading
          materialIconName="arrow-back"
          onPress={() => setTimeout(() => Alert.alert('ola'), 200)}
        >
          Carregando
        </Button>
      </>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
    justifyContent: 'center',
    gap: 20,
  },
})

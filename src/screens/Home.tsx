import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'
import { Alert, StyleSheet, View } from 'react-native'
import { Divider } from 'react-native-paper'

import { Button } from '../components'

export default function Home() {
  return (
    <View style={styles.container}>
      <Button size="lg" onPress={() => {}}>
        Adicionar
      </Button>
      <Button size="md" onPress={() => {}}>
        Adicionar
      </Button>
      <Button size="sm" materialIconName="approval" onPress={() => {}}>
        Confirm
      </Button>
      <Divider style={{ height: 1 }} />
      <Button onPress={() => {}}>Continuar</Button>
      <Divider style={{ height: 1 }} />
      <Button
        variant="outlined"
        icon={
          <MaterialIcons name={'arrow-downward'} size={20} color={'#000'} />
        }
      >
        Voltar
      </Button>
      <Divider style={{ height: 1 }} />
      <Button
        variant="outlined"
        loading
        icon={
          <MaterialIcons name={'arrow-downward'} size={20} color={'#000'} />
        }
      >
        Voltar
      </Button>
      <Divider style={{ height: 1 }} />
      <Button
        onPress={() => setTimeout(() => Alert.alert('ola'), 200)}
        loading
        disabled
      >
        Carregando
      </Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    backgroundColor: '#fff',
    justifyContent: 'center',
    gap: 20,
    paddingHorizontal: 20,
  },
})

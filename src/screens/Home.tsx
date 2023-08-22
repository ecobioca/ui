import { Alert, StyleSheet, View } from 'react-native'
import { Divider } from 'react-native-paper'

import { Button } from '../components'

export default function Home() {
  return (
    <View style={styles.container}>
      <>
        <Button
          title="Continuar"
          onPress={() => setTimeout(() => Alert.alert('oi'), 200)}
        />
        <Divider style={{ height: 1 }} />
        <Button
          title="Continuar"
          onPress={() => setTimeout(() => Alert.alert('oi lucca'), 200)}
          mode="outlined"
        />
        <Divider style={{ height: 1 }} />
        <Button
          title="Voltar"
          materialIconName="arrow-back"
          onPress={() => setTimeout(() => Alert.alert('oi kaique'), 200)}
        />
        <Divider style={{ height: 1 }} />
        <Button
          title="Continuar"
          loading
          materialIconName="arrow-back"
          onPress={() => setTimeout(() => Alert.alert('ola'), 200)}
        />
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

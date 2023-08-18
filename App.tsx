import { StatusBar } from 'expo-status-bar'
import { Alert, StyleSheet, View } from 'react-native'

import { Button } from './src'

export default function App() {
  return (
    <View style={styles.container}>
      <Button label="Clique" onPress={() => Alert.alert('Clicou')} />
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

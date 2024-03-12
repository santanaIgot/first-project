import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View,Button,TextInput, Alert } from 'react-native';

export default function App() {

  const [login, setLogin] = useState()
  const [senha, setSenha] = useState()
  
  const loginPadrao = 'Fiap'
  const senhaPadrao ='1234'

  function validaLogin(login, senha) {
    console.warn('Login Realizado com sucesso')
    Alert.alert('Login executado com sucesso')
  }


  return (
    <View style={styles.container}>
      <Text>Login</Text>
      

      <TextInput
      style={styles.input}
      placeholder="Informe seu login"
      value={login}
      placeholderTextColor='#999'
      onChangeText={(e) => setLogin(e)}
      />
      <Text>Senha</Text>

      <TextInput
      placeholder="Informe sua login"
      style={styles.input}
      value={senha}
      placeholderTextColor='#999'
      onChangeText={(e) => setSenha(e)}
      />

      <Button
        title = 'efetuar login'
        onPress={(e)=>validaLogin(login, senha)}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },


  input:{
    borderWidth:1,

  }
});

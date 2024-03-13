import { StyleSheet, Text, View, TextInput, TouchableOpacity, SafeAreaView, Image} from 'react-native';
import Input from './src/components/Input'

export default function App() {

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

      <Text style={styles.title}>Senai</Text>

      <Text style={styles.subtitle}>Atividade de login</Text>

    <Image source={require("./src/assets/images/cat.gif")} style={{marginBottom:40}}/>
      <Input
        name={'person'}
        placeholder={'E-mail'}
        keyboardType={'email-address'}
      />

      <Input
        secureTextEntry
        name={'lock-closed'}
        placeholder={'Senha'}
        keyboardType={'default'}
      />

      <TouchableOpacity style={styles.button}>
        <Text onPress={() => alert('Botão ENTRAR foi pressionado')} style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </SafeAreaView >
  );
}

const styles = StyleSheet.create({

  button: {
    height: 40,
    width: 70,
    borderColor: '#19A382',
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: '#F0D800',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:20,
  },

  buttonText: {
    fontSize:18,
    fontWeight:'bold',
    color: '#5F5F5F',
  },

  title:{
    fontSize:30,
    textTransform:'uppercase',
    fontWeight:'bold',
    color:'#C20404'
  },

  subtitle:{
    fontSize:25,
    textTransform:'uppercase',
    fontWeight:'bold',
    marginTop:30,
    marginBottom:50,
  },

});

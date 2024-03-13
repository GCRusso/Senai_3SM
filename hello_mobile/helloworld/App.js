import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { useFonts, Angkor_400Regular } from '@expo-google-fonts/angkor';

export default function App() {

  const [fontsLoaded] = useFonts({
    Angkor_400Regular
  });

  if (!fontsLoaded) {
    return null;
  }''

  function pressOutput() {
    alert('Vencedor da copa pistão! VRUUUM')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello World </Text>

      <Text style={styles.subtitle}>React Native</Text>

      <Image style={styles.image} source={require("./assets/images/mcqueen.png")} />

      <TextInput style={styles.input} onPressOut={pressOutput} >
        <Text>Marquinhos the best!</Text>
      </TextInput>

      <Text style={styles.text}>Marquinhos é o melhor?</Text>

      <View style={styles.boxButton}>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.textButton} onPress={() => alert('Voto cadastrado com sucesso!')}>Sim</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.textButton} onPress={() => alert('Voto cadastrado com sucesso!')}>Claro</Text>
      </TouchableOpacity>

    </View>

    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontSize: 23,
    fontFamily: 'Angkor_400Regular',
  },

  subtitle: {
    fontSize: 20,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },

  image: {
    width: '100%',
    height: '30%',
    marginTop: 35,
    marginBottom: 35,
  },

  input: {
    backgroundColor: 'white',
    height: 25,
    width: '80%',
    borderRadius: 8,
    borderColor: 'black',
    paddingLeft: 10,
    paddingRight: 10,
    borderWidth: 2,
    marginBottom: 25,
  },

  text: {
    fontSize: 20,
    color: 'red',
    fontWeight: 'bold',
  },

  button: {
    width: 70,
    height: 30,
    borderWidth: 2,
    borderRadius: 8,
    backgroundColor: 'red',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  boxButton: {
    display: 'flex',
    flexDirection: 'row',
    width: '50%',
    justifyContent: 'space-between',
    marginTop: 20,
  },

  textButton: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  }
});

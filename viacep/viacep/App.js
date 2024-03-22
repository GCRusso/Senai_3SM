import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Home } from './src/screens/Home';

//Import de fontes
import {useFonts, Economica_700Bold, Economica_400Regular } from '@expo-google-fonts/economica';
import { Header } from './src/components/Header';

export default function App() {

  //Fontes importadas
  const [fontLoaded, fontError] = useFonts({
    Economica_700Bold,
    Economica_400Regular
  })

  //Validação das fontes
  if(!fontLoaded && !fontError)
  {
    return null;
  }


  //!RETORNO
  return (
    <View style={styles.container}>
      <Header/>
      
      <Home/>

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
});

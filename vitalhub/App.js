import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput} from 'react-native';
import { Login } from './src/screens/login';
import { useFonts, Montserrat_500Medium, Montserrat_800ExtraBold} from '@expo-google-fonts/montserrat';
import { TouchableOpacity } from "react-native"


export default function App() {

  //Fontes importadas
  const [fontLoaded, fontError] = useFonts({
    Montserrat_500Medium,
    Montserrat_800ExtraBold

  })

  //Validação das fontes
  if (!fontLoaded && !fontError) {
    return null;
  }


  return (
    <View style={styles.container}>
      <Login />

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

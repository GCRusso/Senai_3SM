import { StyleSheet, Text, View, TextInput} from 'react-native';
import { TouchableOpacity } from "react-native"


//Import de Fonts
import { useFonts, Montserrat_500Medium, Montserrat_800ExtraBold, } from '@expo-google-fonts/montserrat';
import { Quicksand_500Medium } from '@expo-google-fonts/quicksand';


//Import Navigation, para navegação entre páginas
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Paginas
import { RecuperarSenha } from './src/screens/recuperarSenha';
import { Login } from './src/screens/login';
import { VerificarEmail } from './src/screens/verificarEmail';
import { RedefinirSenha } from './src/screens/redefinirSenha';
import { CriarConta } from './src/screens/criarConta';
import { Navegacao } from './src/screens/navegacao';
import { ConsultationModal } from './src/components/consultationModal';


export default function App() {

  //instanciamos do StackNavigator
  const Stack = createNativeStackNavigator();

  //Fontes importadas
  const [fontLoaded, fontError] = useFonts({
    Montserrat_500Medium,
    Montserrat_800ExtraBold,
    Quicksand_500Medium

  })

  //Validação das fontes
  if (!fontLoaded && !fontError) {
    return null;
  }


  return (

    <NavigationContainer>

      <Stack.Navigator screenOptions={{ headerShown: false }}>

      <Stack.Screen
          name='Navegacao'
          component={Navegacao}
        />

        <Stack.Screen
          name='Login'
          component={Login}
        />


        <Stack.Screen
          name='RecuperarSenha'
          component={RecuperarSenha}
        />

        <Stack.Screen
          name='VerificarEmail'
          component={VerificarEmail}
        />

        <Stack.Screen
          name='RedefinirSenha'
          component={RedefinirSenha}
        />

        <Stack.Screen
          name='CriarConta'
          component={CriarConta}
        />

        <Stack.Screen
          name='ConsultationModal'
          component={ConsultationModal}
        />

      </Stack.Navigator>

    </NavigationContainer >

  );
}
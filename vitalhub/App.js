
//Import de Fonts
import { useFonts, Montserrat_500Medium, Montserrat_800ExtraBold, } from '@expo-google-fonts/montserrat';
import { Quicksand_500Medium, Quicksand_700Bold } from '@expo-google-fonts/quicksand';

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
import { SelecionarMedico } from './src/screens/selecionarMedico';
import { SelecionarClinica } from './src/screens/selecionarClinica';
import { SelecionarData } from './src/screens/selecionarData';
import { LocalClinica } from './src/screens/localClinica';
import { DadosConsulta } from './src/screens/dadosConsulta';
import { HomePaciente } from './src/screens/homePaciente';
import { DadosPaciente } from './src/screens/dadosPaciente';
import { Camera } from './src/screens/camera';
import { Mapa } from './src/screens/Mapa';

export default function App() {

  //instanciamos do StackNavigator
  const Stack = createNativeStackNavigator();

  //Fontes importadas
  const [fontLoaded, fontError] = useFonts({
    Montserrat_500Medium,
    Montserrat_800ExtraBold,
    Quicksand_500Medium,
    Quicksand_700Bold
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
          name='SelecionarMedico'
          component={SelecionarMedico}
        />

        <Stack.Screen
          name='SelecionarClinica'
          component={SelecionarClinica}
        />

        <Stack.Screen
          name='SelecionarData'
          component={SelecionarData}
        />

        <Stack.Screen
          name='LocalClinica'
          component={LocalClinica}
        />

        <Stack.Screen
          name='DadosConsulta'
          component={DadosConsulta}
        />

        <Stack.Screen
          name='HomePaciente'
          component={HomePaciente}
        />

        <Stack.Screen
          name='DadosPaciente'
          component={DadosPaciente}
        />

        <Stack.Screen
          name='Camera'
          component={Camera}
        />

        <Stack.Screen
          name='Mapa'
          component={Mapa}
        />

      </Stack.Navigator>

    </NavigationContainer >

  );
}
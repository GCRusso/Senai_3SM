import { Text, TextAcount, TextMake, ViewText } from "./style";
import { Title } from "../../components/title/style"
import { Logo } from "../../components/logo/style"
import { Container } from "../../components/container/style";
import { InputText } from "../../components/input/style"
import { NormalButton, GoogleButton } from "../../components/button/index.jsx";


export const Login = ({ navigation }) => {
    return (
        <Container>
            
            <Logo source={require("../../../assets/images/VitalHub_Logo.png")} />

            <Title>Entrar ou criar conta</Title>

            <InputText
                placeholder={"Usuário ou E-mail"}
                placeholderTextColor={'#34898F'}
                autoCapitalize={'none'}
                keyBoardType={'email'}
            />

            <InputText
                placeholder={"Senha"}
                secureTextEntry={true}
                placeholderTextColor={'#34898F'}
                autoCapitalize={'none'}
            />

            <Text>Esqueceu sua senha?</Text>
            
            <NormalButton
                title={'Entrar'}
                onPress={() => navigation.navigate('RecuperarSenha')}
            />
            
            <GoogleButton
                title={"entrar com o google"}
            />

            <ViewText>
                <TextAcount>Não tem conta?</TextAcount>
                <TextMake>Crie uma conta agora!</TextMake>
            </ViewText>

        </Container>

    )
};
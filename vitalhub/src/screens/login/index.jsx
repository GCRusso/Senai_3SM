import { Text, TextAcount, TextMake, ViewText } from "./style";
import { Title } from "../../components/title/style"
import { Logo } from "../../components/logo/style"
import { Container } from "../../components/container/style";
import { InputText } from "../../components/input/style"
import { NormalButton, GoogleButton } from "../../components/button/index.jsx";

export function Login() {
    return (
        <Container>
            <Logo source={require("../../../assets/images/VitalHub_Logo.png")} />
            <Title>Entrar ou criar conta</Title>
            <InputText
                placeholder={"Usuário ou E-mail"}
                keyboardType={'email'}
                placeholderTextColor={'#34898F'}
            />
            <InputText
                placeholder={"Senha"}
                keyboardType={'text'}
                secureTextEntry={true}
                placeholderTextColor={'#34898F'}
            />
            <Text>Esqueceu sua senha?</Text>

            <NormalButton
                title={'Entrar'}
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
import { Text, TextAcount, TextMake, ViewText, TextMakeCriar } from "./style";
import { Title } from "../../components/title/style"
import { Logo } from "../../components/logo/style"
import { Container } from "../../components/container/style";
import { InputText } from "../../components/input/style"
import { NormalButton, GoogleButton } from "../../components/button/index.jsx";
import { Paragraph } from "../../components/paragraph/style.js";

export const CriarConta = ({ navigation }) => {
    return (
        <Container>
            <Logo source={require("../../../assets/images/VitalHub_Logo.png")} />

            <Title>Criar conta</Title>

            <Paragraph>Insira seu endereço de e-mail e senha para realizar seu cadastro.</Paragraph>

            <InputText
                placeholder={"E-mail"}
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

            <InputText
                placeholder={"Confirmar Senha"}
                secureTextEntry={true}
                placeholderTextColor={'#34898F'}
                autoCapitalize={'none'}
            />

            <NormalButton
                title={'Cadastrar'}
                onPress={() => navigation.navigate('Login')}
            />

            <TextMakeCriar>Cancelar</TextMakeCriar>
        </Container>


    )
};
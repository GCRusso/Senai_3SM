import { TextAcount, TextMake, ViewText } from "./style";
import { Title } from "../../components/title/style"
import { Logo } from "../../components/logo/style"
import { Container } from "../../components/container/style";
import { InputText } from "../../components/input/style"
import { NormalButton, GoogleButton } from "../../components/button/index.jsx";
import { Paragraph } from "../../components/paragraph/style.js";

export const RedefinirSenha = ({ navigation }) => {
    return (
        <Container>
            <Logo source={require("../../../assets/images/VitalHub_Logo.png")} />
            <Title>Redefinir Senha</Title>

            <Paragraph>Insira e confirme a sua nova senha</Paragraph>

            <InputText
                placeholder={"Nova senha"}
                placeholderTextColor={'#34898F'}
                secureTextEntry={true}
                autoCapitalize={'none'}
            />


            <InputText
                placeholder={"Confirmar nova senha"}
                placeholderTextColor={'#34898F'}
                secureTextEntry={true}
                autoCapitalize={'none'}
            />

            <NormalButton
                title={'Confirmar nova senha'}
                onPress={() => navigation.navigate("CriarConta")}
            />

        </Container>

    )
};
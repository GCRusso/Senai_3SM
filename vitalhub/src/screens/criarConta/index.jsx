import { Title } from "../../components/title/style"
import { Logo } from "../../components/logo/style"
import { Container } from "../../components/container/style";
import { InputText } from "../../components/input/style"
import { NormalButton } from "../../components/button/index.jsx";
import { Paragraph } from "../../components/paragraph/style.js";
import { LinkMedium } from "../../components/links/Style.js";

export const CriarConta = ({ navigation }) => {
    return (
        <Container>
            <Logo source={require("../../../assets/images/VitalHub_Logo.png")} />

            <Title>Criar conta</Title>

            <Paragraph style={{ marginTop: 15, marginBottom: 20 }}>
                Insira seu endereço de e-mail e senha para realizar seu cadastro.
            </Paragraph>

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
                style={{ marginTop: 15, marginBottom: 15 }}
            />

            <InputText
                placeholder={"Confirmar Senha"}
                secureTextEntry={true}
                placeholderTextColor={'#34898F'}
                autoCapitalize={'none'}
                style={{ marginBottom: 30 }}
            />

            <NormalButton
                title={'Cadastrar'}
                onPress={() => navigation.navigate('Login')}

            />

            <LinkMedium style={{ marginTop: 30 }}>
                Cancelar
            </LinkMedium>

        </Container>


    )
};
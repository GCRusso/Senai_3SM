import { ViewText } from "./style";
import { Title } from "../../components/title/style"
import { Logo } from "../../components/logo/style"
import { Container } from "../../components/container/style";
import { InputText } from "../../components/input/style"
import { NormalButton, GoogleButton } from "../../components/button/index.jsx";
import { LinkMedium } from "../../components/links/index.jsx";
import { Paragraph } from "../../components/paragraph/style.js";


export const Login = ({ navigation }) => {
    return (
        <Container>

            <Logo source={require("../../../assets/images/VitalHub_Logo.png")} />

            <Title style={{ marginBottom: 20 }}>Entrar ou criar conta</Title>

            <InputText
                placeholder={"Usuário ou E-mail"}
                placeholderTextColor={'#34898F'}
                autoCapitalize={'none'}
                keyBoardType={'email'}
                style={{ marginBottom: 15 }}
            />

            <InputText
                placeholder={"Senha"}
                secureTextEntry={true}
                placeholderTextColor={'#34898F'}
                autoCapitalize={'none'}
            />
            <LinkMedium style={{marginTop:15, marginBottom:25, marginRight: 160, color:'#8C8A97'}}>
                Esqueceu sua senha?
            </LinkMedium>

            <NormalButton
                title={'Entrar'}
                onPress={() => navigation.navigate('RecuperarSenha')}
            />

            <GoogleButton
                title={"entrar com o google"}
            />

            <ViewText>
                <Paragraph style={{ fontSize: 14, marginRight: 5 }}>Não tem conta?</Paragraph>

                <LinkMedium 
                title={'Crie uma conta agora!'}
                onPress={() => navigation.navigate('CriarConta')}
                
                />
            </ViewText>

        </Container>

    )
};
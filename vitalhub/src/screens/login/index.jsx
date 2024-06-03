import { ViewText } from "./style";
import { Title } from "../../components/title/style"
import { Logo } from "../../components/logo/style"
import { Container } from "../../components/container/style";
import { InputText } from "../../components/input/style"
import { NormalButton, GoogleButton } from "../../components/button/index.jsx";
import { LinkMedium, LinkMediumGrey } from "../../components/links/index.jsx";
import { Paragraph } from "../../components/paragraph/style.js";
import { View } from "react-native";

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

            <View style= {{marginTop:10, marginBottom:30, alignSelf:'flex-start', marginLeft:15}}>
                <LinkMediumGrey
                    onPress={() => navigation.replace('RecuperarSenha')}
                    title={"Esqueceu sua senha?"}
                />
            </View>

            <NormalButton
                title={'Entrar'}
            // onPress={() => navigation.navigate('RecuperarSenha')}
            />

            <GoogleButton
                title={"entrar com o google"}
            />

            <ViewText>
                <Paragraph style={{ fontSize: 14, marginRight: 5 }}>Não tem conta?</Paragraph>

                <LinkMedium
                    title={'Crie uma conta agora!'}
                    onPress={() => navigation.replace('CriarConta')}
                />
            </ViewText>

        </Container>

    )
};
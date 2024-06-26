import { Title } from "../../components/title/style"
import { Logo } from "../../components/logo/style"
import { Container } from "../../components/container/style";
import { InputText } from "../../components/input/style"
import { NormalButton } from "../../components/button/index.jsx";
import { Paragraph } from "../../components/paragraph/style.js";
import { LinkMedium } from "../../components/links/index.jsx";
import { View } from "react-native";


export const CriarConta = ({ navigation }) => {
    return (
        <Container>

            <Logo
                source={require("../../../assets/images/VitalHub_Logo.png")}
                style={{ bottom: 20 }}
            />

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

            {/* Boxlink = para dar espaçamento entre o Button e LinkMedium, pois não daa para inserir STYLE direto em componente de botão */}
            <NormalButton
                title={'Cadastrar'}
                onPress={() => navigation.replace('Login')}
            />

            <View style={{marginTop:30}}>
                <LinkMedium
                    title={'Cancelar'}
                    onPress={() => navigation.replace('Login')}
                />
            </View>

        </Container>


    )
};
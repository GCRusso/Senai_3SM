import { Title } from "../../components/title/style"
import { Logo } from "../../components/logo/style"
import { Container } from "../../components/container/style";
import { InputText } from "../../components/input/style"
import { ButtonReturn, NormalButton } from "../../components/button/index.jsx";
import { Paragraph } from "../../components/paragraph/style.js";

import { ViewLogo } from "./style.js";

export const RecuperarSenha = ({ navigation }) => {
    return (

        <Container>
            <ViewLogo>
                <ButtonReturn
                    onPress={() => navigation.replace('Login')}
                />

                <Logo 
                    source={require("../../../assets/images/VitalHub_Logo.png")}
                    style={{bottom: 20}}
                />
            </ViewLogo>


            <Title style={{ marginBottom: 15 }}>Recuperar senha</Title>

            <Paragraph style={{ textAlign: 'center', marginBottom: 20 }}>
                Digite abaixo seu email cadastrado que enviaremos um link para recuperação de senha
            </Paragraph>

            <InputText
                placeholder={"Usuário ou E-mail"}
                placeholderTextColor={'#34898F'}
                autoCapitalize={'none'}
                keyBoardType={'email'}
                style={{ marginBottom: 20 }}
            />

            <NormalButton
                title={'Continuar'}
                onPress={() => navigation.replace('VerificarEmail')}
            />

        </Container>

    )
};
import { TextAcount, TextMake, ViewText } from "./style";
import { Title } from "../../components/title/style"
import { Logo, LogoIcon } from "../../components/logo/style"
import { Container } from "../../components/container/style";
import { InputText } from "../../components/input/style"
import { NormalButton, GoogleButton } from "../../components/button/index.jsx";
import { Paragraph } from "../../components/paragraph/style.js";
import { Feather } from '@expo/vector-icons';

export const RecuperarSenha = ({ navigation })=> {
    return (
        
        <Container>

            <Feather name="arrow-left-circle" size={24} color="#34898F" />    
             <Logo source={require("../../../assets/images/VitalHub_Logo.png")}/>
            
            
            <Title>Recuperar senha</Title>

            <Paragraph>Digite abaixo seu email cadastrado que enviaremos um link para recuperação de senha</Paragraph>

            <InputText
                placeholder={"Usuário ou E-mail"}
                placeholderTextColor={'#34898F'}
                autoCapitalize={'none'}
                keyBoardType = {'email'}
            />

            <NormalButton
                title={'Continuar'}
                onPress={() => navigation.navigate('VerificarEmail')}
            />

        </Container>
        
    )
};
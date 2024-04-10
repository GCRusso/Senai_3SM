import { Text, TextAcount, TextMake, ViewText, TextMakeEmail, ViewInput } from "./style";
import { Title } from "../../components/title/style"
import { Logo } from "../../components/logo/style"
import { Container } from "../../components/container/style";
import { InputText, InputNumber } from "../../components/input/style"
import { NormalButton, GoogleButton } from "../../components/button/index.jsx";
import { Paragraph } from "../../components/paragraph/style.js";

export const VerificarEmail = ({ navigation }) => {
    return (
        <Container>
            <Logo source={require("../../../assets/images/VitalHub_Logo.png")} />
            <Title>Verifique seu E-mail</Title>
            <Paragraph>Digite o código de 4 dígitos enviados para o seu e-mail</Paragraph>

            <ViewInput>

                <InputNumber
                    keyBoardType={'number'}
                    maxLength={1}
                    tabindex={1}
                />
                <InputNumber
                    keyBoardType={'number'}
                    maxLength={1}
                    tabindex={2}
                />
                <InputNumber
                    keyBoardType={'number'}
                    maxLength={1}
                    tabindex={3}
                />
                <InputNumber
                    keyBoardType={'number'}
                    maxLength={1}
                    tabindex={4}
                />

            </ViewInput>

            <NormalButton
                title={'Entrar'}
                onPress={() => navigation.navigate('RedefinirSenha')}
            />

            <TextMakeEmail>Reenviar código</TextMakeEmail>

        </Container>


    )
};
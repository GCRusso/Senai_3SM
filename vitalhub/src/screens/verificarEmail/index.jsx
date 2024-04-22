import { ViewInput } from "./style";
import { Title } from "../../components/title/style"
import { Logo } from "../../components/logo/style"
import { Container } from "../../components/container/style";
import { InputNumber } from "../../components/input/style"
import { ButtonReturn, NormalButton } from "../../components/button/index.jsx";
import { Paragraph } from "../../components/paragraph/style.js";
import { LinkMedium } from "../../components/links/index.jsx";
import { ViewLogo } from "../recuperarSenha/style.js";
import { BoxLink } from "../../components/links/Style.js";

export const VerificarEmail = ({ navigation }) => {
    return (
        <Container>
            <ViewLogo>

                <ButtonReturn
                    onPress={() => navigation.navigate('RecuperarSenha')}
                />

                <Logo
                    source={require("../../../assets/images/VitalHub_Logo.png")}
                    style={{ bottom: 20 }}
                />
            </ViewLogo>

            <Title>Verifique seu E-mail</Title>

            <Paragraph style={{ textAlign: 'center', marginTop: 15, marginBottom: 20 }}>Digite o código de 4 dígitos enviados para o seu e-mail</Paragraph>

            <ViewInput style={{ marginTop: 20, marginBottom: 30 }}>

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

        {/* Boxlink = para dar espaçamento entre o Button e LinkMedium, pois não daa para inserir STYLE direto em componente de botão */}
            <BoxLink>
                <NormalButton
                    title={'Entrar'}
                    onPress={() => navigation.navigate('RedefinirSenha')}
                />

                <LinkMedium
                    title={'Reenviar código'}
                />
            </BoxLink>

        </Container>
    )
};
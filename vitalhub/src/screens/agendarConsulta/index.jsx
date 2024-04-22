import { Title } from "../../components/title/style.js"
import { Container } from "../../components/container/style.js";
import { NormalButton } from "../../components/button/index.jsx";
import { BoxLink } from "../../components/links/Style.js";
import { LinkMedium } from "../../components/links/index.jsx";
import { Paragraph } from "../../components/paragraph/style.js"
import { InputText } from "../../components/input/style.js";



export const AgendarConsulta = ({ navigation }) => {
    return (
        <Container>

            <Title>Selecionar data</Title>

            <Paragraph>Selecione um horário disponível</Paragraph>

            <InputText
                placeholder={"Selecionar horário"}
                placeholderTextColor={'#60BFC5'}
                autoCapitalize={'none'}
            />

            <BoxLink>
                <NormalButton
                    title={'Continuar'}
                    onPress={() => navigation.navigate("SelecionarMedico")}
                />

                <LinkMedium
                    title={'Cancelar'}
                    onPress={() => navigation.navigate("Navegacao")}
                />
            </BoxLink>

        </Container>

    )
};
import { Title } from "../../components/title/style.js"
import { Container } from "../../components/container/style.js";
import { NormalButton } from "../../components/button/index.jsx";
import { BoxLink } from "../../components/links/Style.js";
import { LinkMedium } from "../../components/links/index.jsx";
import { Paragraph } from "../../components/paragraph/style.js"
import { InputText } from "../../components/input/style.js";
import { CalendarApp } from "../../components/CalendarApp/CalendarApp.jsx"


export const AgendarConsulta = ({ navigation }) => {
    return (
        <Container>

            <Title
            style = {{marginBottom:35}}
            >Selecionar data</Title>

            <CalendarApp />

            <Paragraph
                style={{ marginRight: 75, marginBottom: 10, marginTop: 30 }}
            >
                Selecione um horário disponível
            </Paragraph>

            <InputText
                placeholder={"Selecionar horário"}
                placeholderTextColor={'#60BFC5'}
                autoCapitalize={'none'}
                style={{ marginBottom: 42 }}
            />

            <BoxLink>
                <NormalButton
                    title={'Continuar'}
                    onPress={() => navigation.navigate("Login")}
                />

                <LinkMedium
                    title={'Cancelar'}
                    onPress={() => navigation.navigate("Navegacao")}
                />
            </BoxLink>

        </Container>

    )
};
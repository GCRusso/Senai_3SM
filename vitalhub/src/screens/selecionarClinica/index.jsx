import { Title } from "../../components/title/style"
import { NormalButton } from "../../components/button/index.jsx";
import { LinkMedium } from "../../components/links/index.jsx";
import { BoxLink } from "../../components/links/Style.js";
import { Clinica } from "../../components/clinicaCard/index.jsx";
import { ClinicaView } from "./style.js";
import { Container} from "../../components/container/style.js"



export const SelecionarClinica = ({ navigation }) => {
    return (

        <Container>

            <Title>Selecionar clínica</Title>

            <ClinicaView>
                <Clinica

                    title={'Clínica Natureh'}
                    paragraph={'São Paulo, SP'}
                    star={'4,5'}
                    week={'Seg - Sex'}
                    onPress={() => navigation.navigate("SelecionarMedico")}
                />

                <Clinica
                    title={'Diamond Pró-Mulher'}
                    paragraph={'São Paulo, SP'}
                    star={'4,8'}
                    week={'Seg - Sex'}
                    onPress={() => navigation.navigate("SelecionarMedico")}
                />

                <Clinica
                    title={'Clinica Villa Lobos'}
                    paragraph={'Taboão, SP'}
                    star={'4,2'}
                    week={'Seg - Sáb'}
                    onPress={() => navigation.navigate("SelecionarMedico")}
                />

                <Clinica
                    title={'SP Oncologia Clínica'}
                    paragraph={'Taboão, SP'}
                    star={'4,2'}
                    week={'Seg - Sáb'}
                    onPress={() => navigation.navigate("SelecionarMedico")}
                />
            </ClinicaView>

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
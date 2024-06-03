import { Title } from "../../components/title/style"
import { NormalButton } from "../../components/button/index.jsx";
import { LinkMedium } from "../../components/links/index.jsx";
import { View } from "react-native";
import { Clinica } from "../../components/clinicaCard/index.jsx";
import { ClinicaView, RenderView } from "./style.js";
import { Container } from "../../components/container/style.js"


export const SelecionarClinica = ({ navigation }) => {

    const clinicas = [
        {
            id: 1,
            title: 'Clínica Natureh',
            paragraph: 'São Paulo, SP',
            star: '4,5',
            week: 'Seg - Sex',
            onPress: () => navigation.navigate("SelecionarMedico")
        },
        {
            id: 2,
            title: 'Diamond Pró-Mulher',
            paragraph: 'São Paulo, SP',
            star: '4,8',
            week: 'Seg - Sex',
            onPress: () => navigation.navigate("SelecionarMedico")
        },
        {
            id: 3,
            title: 'Clinica Villa Lobos',
            paragraph: 'Taboão, SP',
            star: '4,2',
            week: 'Seg - Sab',
            onPress: () => navigation.navigate("SelecionarMedico")
        },
        {
            id: 4,
            title: 'SP Oncologia Clínica',
            paragraph: 'Taboão, SP',
            star: '4,2',
            week: 'Seg - Sab',
            onPress: () => navigation.navigate("SelecionarMedico")
        },
        {
            id: 5,
            title: 'Pediatria Happy',
            paragraph: 'Tatuapé, SP',
            star: '4,9',
            week: 'Seg - Sab',
            onPress: () => navigation.navigate("SelecionarMedico")
        },
    ];

    return (

        <Container>

            <Title>Selecionar clínica</Title>

            <ClinicaView
                data={clinicas}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) =>
                    <Clinica
                        title={item.title}
                        star={item.star}
                        week={item.week}
                        paragraph={item.paragraph}
                    />}
            />


            <NormalButton
                title={'Continuar'}
                onPress={() => navigation.replace("SelecionarMedico")}
            />

            <View style={{marginTop:30}}>
                <LinkMedium
                    title={'Cancelar'}
                    onPress={() => navigation.replace("HomePaciente")}
                />
            </View>



        </Container>

    )
};
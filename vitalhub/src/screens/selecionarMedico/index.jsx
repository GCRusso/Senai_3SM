import { Title } from "../../components/title/style"
import { Container } from "../../components/container/style";
import { NormalButton } from "../../components/button/index.jsx";
import { BoxLink } from "../../components/links/Style.js";
import { LinkMedium } from "../../components/links/index.jsx";
import { Medico } from "../../components/medicoCard/index.jsx";
import { BoxMedicoView, MedicoCardView } from "./style.js";
import { ConsultationModal } from "../../components/consultationModal/index.jsx";
import { useState } from "react";

export const SelecionarMedico = ({ navigation }) => {

    const [modal, setModal] = useState(false);

    const medicos = [
        {
            id: 1,
            title: 'Dra. Alessandra',
            paragraph: 'Demartologa, Esteticista',
        },

        {
            id: 2,
            title: 'Dr. Kumushiro',
            paragraph: 'Cirurgião, Cardiologista',
        },

        {
            id: 3,
            title: 'Dr. Rodrigo Santos',
            paragraph: 'Clínico, Pediatra',
        },

        {
            id: 4,
            title: 'Dr. Carla Frozen',
            paragraph: 'Oncologista',
        },

        {
            id: 5,
            title: 'Dr. Maria Luiza',
            paragraph: 'Ortopedista',
        },
   
    ];


    return (
        <>
            <Container>

                <Title>Selecionar médico</Title>

                <MedicoCardView
                    data={medicos}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) =>
                        <BoxMedicoView>
                            <Medico
                                title={item.title}
                                paragraph={item.paragraph}
                            />
                        </BoxMedicoView>}
                />




                <BoxLink>
                    <NormalButton
                        title={'Continuar'}
                        onPress={() => setModal(true)}
                    />

                    <LinkMedium
                        title={'Cancelar'}
                        onPress={() => navigation.navigate("Navegacao")}
                    />
                </BoxLink>

            </Container>

            <ConsultationModal
                visible={modal}
                onClose={() => setModal(false)}
                navigation={() => navigation.navigate("AgendarConsulta")}
            />

        </>
    )
};
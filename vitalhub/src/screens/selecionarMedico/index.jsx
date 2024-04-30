import { Title } from "../../components/title/style"
import { Container } from "../../components/container/style";
import { NormalButton } from "../../components/button/index.jsx";
import { BoxLink } from "../../components/links/Style.js";
import { LinkMedium } from "../../components/links/index.jsx";
import { Medico } from "../../components/medicoCard/index.jsx";
import { ImageMedico } from "../../components/medicoCard/style.js";
import { BoxMedicoView, MedicoCardView } from "./style.js";
import { ConsultationModal } from "../../components/consultationModal/index.jsx";
import { useState } from "react";
import { FlatList, SafeAreaView } from "react-native";

export const SelecionarMedico = ({ navigation }) => {

    const [modal, setModal] = useState(false);

    const Data = [
        {
            title: 'Dra. Alessandra',
        },
        {
            title: 'Dr. Kumushiro',
        },
        {
            title: 'Dr. Rodrigo Santos',
        },
    ];

    const Item = ({ title }) => (

            <BoxMedicoView>
                <ImageMedico source={require("../../../assets/images/DraAlessandra.png")} />

                <Medico
                    title={title}

                />
            </BoxMedicoView>

    );

    return (
        <>
            <Container>

                <Title>Selecionar médico</Title>

                <MedicoCardView>
                        <FlatList
                            data={Data}
                            renderItem={({ item }) => <Item title={item.title} />}
                            keyExtractor={item => item.id}
                        />

                </MedicoCardView>


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
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

export const SelecionarMedico = ({ navigation }) => {

    const [modal, setModal] = useState(false);


    return (
        <>

            <Container>

                <Title>Selecionar médico</Title>

                <MedicoCardView>
                    {/* Médico 1 */}
                    <BoxMedicoView>
                        <ImageMedico source={require("../../../assets/images/DraAlessandra.png")} />

                        <Medico
                            title={'Dra Alessandra'}
                            paragraph={'Dermatologa, Esteticista'}
                        />
                    </BoxMedicoView>


                    {/* Médico 2 */}
                    <BoxMedicoView>
                        <ImageMedico source={require("../../../assets/images/DrKumushiro.png")} />

                        <Medico
                            title={'Dr Kumushiro'}
                            paragraph={'Cirurgião, Cardiologista'}
                        />
                    </BoxMedicoView>


                    {/* Médico 3 */}
                    <BoxMedicoView>
                        <ImageMedico source={require("../../../assets/images/DrRodrigo.png")} />

                        <Medico
                            title={'Dr Rodrigo Santos'}
                            paragraph={'Clínico, Pediatra'}
                        />
                    </BoxMedicoView>
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
                navigation={ () => navigation.navigate("AgendarConsulta")}
            />

        </>
    )
};
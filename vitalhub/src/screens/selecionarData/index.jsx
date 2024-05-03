import { Title } from "../../components/title/style.js"
import { Container } from "../../components/container/style.js";
import { NormalButton } from "../../components/button/index.jsx";
import { BoxLink } from "../../components/links/Style.js";
import { LinkMedium } from "../../components/links/index.jsx";
import { Paragraph } from "../../components/paragraph/style.js"
import { CalendarApp } from "../../components/CalendarApp/CalendarApp.jsx"

/* import do useState para ser utilizado pelo MODAL */
import { useState } from "react";

/* Import do modal */
import { AgendarConsultaModal } from "../../components/agendarConsultaModal/index.jsx"
import { Select } from "../../components/select/index.jsx";

/* Import do Select utilizando SelectDropDown */


export const SelecionarData = ({ navigation }) => {

    /* Criando a const para setar o modal como false e altera-lo quando pressionado o botão para true */
    const [modal, setModal] = useState(false);

    return (
        /* tem que ser utilizado essas chaves <> </> para a utilização do modal na página, englobando todo o código */
        <>
            <Container>

                <Title
                    style={{ marginBottom: 35 }}
                >Selecionar data</Title>

                <CalendarApp />

                <Paragraph
                    style={{ marginRight: 75, marginBottom: 10, marginTop: 30 }}
                >
                    Selecione um horário disponível
                </Paragraph>

                <Select />

                <BoxLink style ={{marginTop:35}}>
                    <NormalButton
                        title={'Continuar'}
                        /* Setando o modal como TRUE neste botão */
                        onPress={() => setModal(true)}
                    />

                    <LinkMedium
                        title={'Cancelar'}
                        onPress={() => navigation.navigate("Navegacao")}
                    />
                </BoxLink>

            </Container>

            {/* Inserindo o modal na tela, mas ainda não aparece esta como FALSE */}
            <AgendarConsultaModal
                visible={modal}
                onClose={() => setModal(false)}
                navigation={() => navigation.navigate("LocalClinica")}
            />

        </>

    )
};
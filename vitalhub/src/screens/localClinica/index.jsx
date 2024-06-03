import { Title } from "../../components/title/style"
import { Paragraph } from "../../components/paragraph/style"
import { Container } from "../../components/container/style";
import { AdressView, BoxAdress, ImageView, NumberCityView, ColumnView, StreetView } from "./style";
import { LinkMedium } from "../../components/links/index"
import { Mapa } from "../../components/mapa";


export const LocalClinica = ({ navigation }) => {

    return (
        <Container>
             <Mapa />

            <AdressView>

                {/* HEADER */}
                <Title style={{ marginTop: 30, marginBottom: 8 }}>Clínicah Natureh</Title>
                <Paragraph>São Paulo, SP</Paragraph>


                {/* BOX Rua */}
                <StreetView>
                    <Paragraph style={{ fontSize: 18, color: '#000', marginBottom: 10 }}>Endereço</Paragraph>
                    <BoxAdress>
                        <Paragraph style={{ fontSize: 18, color: '#000' }}> Teste de endereço</Paragraph>
                    </BoxAdress>
                </StreetView>


                <NumberCityView>
                    {/* BOX Número */}
                    <ColumnView>
                        <Paragraph style={{ fontSize: 18, color: '#000', marginBottom: 10 }}>Número</Paragraph>
                        <BoxAdress style={{ width: 144, alignItems: 'center' }}>
                            <Paragraph style={{ fontSize: 18, color: '#000' }}> 578 </Paragraph>
                        </BoxAdress>
                    </ColumnView>

                    {/* BOX Cidade */}
                    <ColumnView>
                        <Paragraph style={{ fontSize: 18, color: '#000', marginBottom: 10 }}>Cidade</Paragraph>
                        <BoxAdress style={{ width: 144, alignItems: 'center' }}>
                            <Paragraph style={{ fontSize: 18, color: '#000' }}> Moema - SP </Paragraph>
                        </BoxAdress>
                    </ColumnView>
                </NumberCityView>


                <LinkMedium
                    title={"Voltar"}
                    onPress={() => navigation.replace("HomePaciente")}

                />

            </AdressView>


        </Container>
    )
};
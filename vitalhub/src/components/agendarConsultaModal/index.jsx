import { BoxDados, ModalForm, ModalHeader, ModalBody, TitleDados, ParagraphDados, LittleBox } from "./style";
import { InputText } from "../input/style";
import { Title } from "../title/style";
import { NormalButton } from "../button";
import { Paragraph } from "../paragraph/style";
import { LinkMedium } from "../links";
import { BoxLink } from "../links/Style";
import { TouchableOpacity } from "react-native";


export const AgendarConsultaModal = ({
    visible,
    navigation,
    onClose

}) => {
    return (

        <ModalForm
            isVisible={visible}
        >

            <ModalHeader>
                <Title style={{ fontSize: 24 }}>Agendar consulta</Title>

                <Paragraph style={{ marginTop: 16, marginBottom: 30, textAlign: 'center' }}>Consulte os dados selecionados para a sua consulta</Paragraph>
            </ModalHeader>

            <ModalBody>

                <BoxDados>
                    <LittleBox>
                        <TitleDados>Data da consulta</TitleDados>
                        <ParagraphDados>1 de Novembro de 2023</ParagraphDados>
                    </LittleBox>

                    <LittleBox>
                        <TitleDados>Médico(a) da consulta</TitleDados>
                        <ParagraphDados>Dra Alessandra</ParagraphDados>
                        <ParagraphDados>Demartologa, Esteticista</ParagraphDados>
                    </LittleBox>

                    <LittleBox>
                        <TitleDados>Local da consulta</TitleDados>
                        <ParagraphDados>São Paulo, SP</ParagraphDados>
                    </LittleBox>

                    <LittleBox>
                        <TitleDados>Tipo da consulta</TitleDados>
                        <ParagraphDados>Rotina</ParagraphDados>
                    </LittleBox>
                </BoxDados>

            </ModalBody>

            <BoxLink>
                <NormalButton
                    title={'Confirmar'}
                    onPress={navigation}
                />

                <TouchableOpacity>
                    <LinkMedium
                        title={'Cancelar'}
                        onPress={onClose}
                    />
                </TouchableOpacity>
            </BoxLink>


        </ModalForm>
    )
};
import { BoxButtons, ModalForm, ModalHeader, ModalBody } from "./style";
import { InputText } from "../input/style";
import { Title } from "../title/style";
import { ButtonConsulta, NormalButton } from "../button";
import { Paragraph } from "../paragraph/style";

export const ConsultationModal = ({
    onRequestClose,
    visible,
    navigation
}) => {
    return (
        <ModalForm>
            <ModalHeader>
                <Title style={{ fontSize: 20 }}>Agendar consulta</Title>
            </ModalHeader>

            <ModalBody>
                <Paragraph style={{ marginTop: 10, marginBottom: 10}}>Qual o nível da consulta?</Paragraph>
                <BoxButtons>

                    <ButtonConsulta
                        title={'Rotina'}
                    />
                    <ButtonConsulta
                        title={'Exame'}
                    />
                    <ButtonConsulta
                        title={'Urgência'}
                    />
                </BoxButtons>


                <Paragraph style={{ marginTop: 20, marginBottom: 10}}>Informe a localização desejada</Paragraph>

                <InputText
                    placeholder={"Informe a localização"}
                    placeholderTextColor={'#60BFC5'}
                    autoCapitalize={'none'}
                />


            </ModalBody>
            <NormalButton
                title={'Continuar'}
            />


        </ModalForm>
    )
};
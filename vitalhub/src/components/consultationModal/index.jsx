import { BoxButtons, ModalForm, ModalHeader, ModalBody } from "./style";
import { InputText } from "../input/style";
import { Title } from "../title/style";
import { ButtonConsulta, NormalButton } from "../button";
import { Paragraph } from "../paragraph/style";
import { LinkMedium } from "../links";
import { BoxLink } from "../links/Style";
import { TouchableOpacity } from "react-native";


export const ConsultationModal = ({
    visible,
    navigation,
    onClose

}) => {
    return (

        <ModalForm
            isVisible = {visible}
        >

            <ModalHeader>
                <Title style={{ fontSize: 20 }}>Agendar consulta</Title>
            </ModalHeader>

            <ModalBody>
                <Paragraph style={{ marginTop: 10, marginBottom: 10 }}>Qual o nível da consulta?</Paragraph>


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


                <Paragraph style={{ marginTop: 20, marginBottom: 10 }}>Informe a localização desejada</Paragraph>

                <InputText
                    placeholder={"Informe a localização"}
                    placeholderTextColor={'#60BFC5'}
                    autoCapitalize={'none'}
                    
                />

            </ModalBody>

            <BoxLink>
                <NormalButton
                    title={'Continuar'}
                    onPress = {navigation}
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
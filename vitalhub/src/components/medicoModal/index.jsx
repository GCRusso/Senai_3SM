import { ModalForm, BoxDados, ImageMedico } from "./style"
import { Title } from "../title/style"
import { LinkMedium } from "../links"
import { Paragraph } from "../../components/paragraph/style"
import { View } from "react-native"
import { NormalButton } from "../button"


export const MedicoModal = ({
    visible,
    navigation,
    onClose
}) => {
    return (
        <ModalForm
            isVisible={visible}
        >
            <ImageMedico source={require('../../../assets/images/DrKumushiro.png')}/>


            <Title style={{ marginTop: 20 }}>Dr. Kumushiro</Title>

            <BoxDados>
                <Paragraph style={{marginRight:20}}>Clínico Geral</Paragraph>
                <Paragraph>CRM - 15286</Paragraph>
            </BoxDados>

            <NormalButton
                title='Ver local da consulta'
                onPress={navigation}
            />

            <View style={{ marginTop: 30 }}></View>
            
            <LinkMedium
                title={'Cancelar'}
                onPress={onClose}
            />

        </ModalForm>
    )
};
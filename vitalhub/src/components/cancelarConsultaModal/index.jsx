import { ModalForm, BoxDados, ImageMedico } from "./style"
import { Title } from "../title/style"
import { LinkMedium } from "../links"
import { Paragraph } from "../paragraph/style"
import { View } from "react-native"
import { NormalButton } from "../button"


export const CancelarConsultaModal = ({
    visible,
    navigation,
    onClose
}) => {
    return (
        <ModalForm
            isVisible={visible}
        >

            <Title style={{ marginTop: 20 }}>Cancelar Consulta</Title>

            <BoxDados>
                <Paragraph style={{ marginTop: 10 }}>Ao cancelar essa consulta, abrirá uma possível disponibilidade no seu horário, deseja mesmo cancelar essa consulta?</Paragraph>
            </BoxDados>


            <NormalButton
                title='Confirmar'
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
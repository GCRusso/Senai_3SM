import { ModalForm, ImagePaciente, BoxDados } from "./style"
import { Title } from "../title/style"
import { LinkMedium } from "../links"
import { Paragraph } from "../../components/paragraph/style"
import { View } from "react-native"
import { NormalButton } from "../button"


export const ProntuarioModal = ({
    visible,
    navigation,
    onClose
}) => {
    return (
        <ModalForm
            isVisible={visible}
        >
            <ImagePaciente source={require("../../../assets/images/picture-paciente.png")} />

            <Title style={{ marginTop: 20 }}>Niccole Sarga</Title>

            <BoxDados>
                <Paragraph style={{marginRight:20}}>22 anos</Paragraph>
                <Paragraph>niccole.sarge@gmail.com</Paragraph>
            </BoxDados>



            <NormalButton
                title='Inserir Prontuário'
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
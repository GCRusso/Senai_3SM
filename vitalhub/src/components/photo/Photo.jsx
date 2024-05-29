import { ButtonText, CloseButton, Line, ModalPhoto, PhotoFile, SaveButton } from "./Style"


export const PhotoTaked = ({
    uriPhoto = "",
    visible = false,
    onRequestClose,
    RequestSave
}) => {
    return (
        <ModalPhoto
            isVisible={visible}
        >
            <PhotoFile source={{ uri: `${uriPhoto}` }} />

            <Line>
                <CloseButton onPress={onRequestClose}>
                    <ButtonText>Cancelar</ButtonText>
                </CloseButton>

                <SaveButton onPress={RequestSave}>
                    <ButtonText>Salvar</ButtonText>
                </SaveButton>
            </Line>

        </ModalPhoto>
    )
}
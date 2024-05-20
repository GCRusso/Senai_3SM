import styled from "styled-components";
import  Modal from "react-native-modal";

export const ModalForm = styled(Modal)`

    width: 90%;
    height: 436px;

    background-color: #FBFBFB;
    border-radius: 10px;
    align-self: center;
    align-items: center;

    position: absolute;
    bottom: 175px;
`

export const ImagePaciente = styled.Image`
    max-height: 181px;
    max-width: 90%;
    width: 90%;
    border-radius: 8px;
`

export const BoxDados = styled.View`
    width:90%;
    max-Width:90%;
    flex-direction: row;
    justify-content: center;
    margin-top: 17px;
    margin-bottom: 30px;
`
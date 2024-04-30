import styled from "styled-components";
import  Modal  from "react-native-modal";

export const ModalForm = styled(Modal)`
    height: 90%;
    width: 90%;
    background-color: #FBFBFB;
    border-radius: 10px;
    align-self: center;
    align-items: center;
    position: absolute;
    margin: 40px;
    padding: 0px 30px 0px 30px;
`

export const ModalHeader = styled.View`
    align-items: center;
    margin-bottom: 35px;
`

export const ModalBody = styled.View`
    justify-content: center;
    margin-bottom: 60px;
`

export const BoxDados = styled.View`
    justify-content: space-between;
    width: 282px;
    height: 316px;
`

export const TitleDados = styled.Text`
    font-family: 'Quicksand_700Bold';
    font-size: 16px;
`

export const ParagraphDados = styled.Text`
    font-family:'Quicksand_500Medium';
    font-size: 14px;
`

export const LittleBox = styled.View`
    margin:20px 0px 10px 0px;
`
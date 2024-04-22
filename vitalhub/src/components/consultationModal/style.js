import styled from "styled-components";
import { Modal } from "react-native";

export const ModalForm = styled(Modal)`
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    background-color: #FFFFFF;
`

export const ModalHeader = styled.View`
    align-items: center;
    margin-top: 25px;
    margin-bottom: 35px;
`

export const ModalBody = styled.View`
    justify-content: center;
    padding-left: 36px;
    padding-right: 36px;
    padding-bottom: 143px;
`

export const BoxButtons = styled.View`
    flex-direction: row;
    justify-content: space-between;
    /* width:100%; */
`

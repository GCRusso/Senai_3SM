import styled from "styled-components";
import  Modal  from "react-native-modal";

export const ModalForm = styled(Modal)`
    height: 70%;
    width: 100%;
    background-color: #FBFBFB;
    border-radius: 10px 10px 0px 0px;
    align-self: center;
    align-items: center;
    position: absolute;
    bottom: 0px;
    margin: 0px;
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
`

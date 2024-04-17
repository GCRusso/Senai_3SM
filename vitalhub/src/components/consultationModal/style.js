import styled from "styled-components";
import { Paragraph } from "../paragraph/style";
import { Title } from "../title/style";
import { InputText } from "../input/style";
import { Modal } from "react-native";

export const ModalForm = styled(Modal)`
    align-items: center;
    justify-content: space-between;
    width: 90%;
    flex: 0.9;
    border-radius: 5px;
    background-color: #FFFFFF;

`
export const ModalHeader = styled.View`
    align-items: center;
    margin-top: 25px;
    width: 80%;

`
export const ModalBody = styled.View`
    width: 80%;
    flex: 0.9;
    align-items: center;
`

export const BoxButtons = styled.View`
    flex-direction: row;
    justify-content: space-between;
    width:100%
`

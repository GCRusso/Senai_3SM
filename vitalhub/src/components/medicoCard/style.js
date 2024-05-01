import styled from "styled-components"
import { TouchableOpacity } from "react-native"

/* CAIXA DE ALINHAMENTO GERAL BACKGROUND */
export const BoxMedico = styled.TouchableOpacity`
    width: 320px;
    height:102px;
    border-radius: 5px;
    background-color: #FFFF;
    padding:10px;
    flex-direction: row;
`


/* TITULO CARD MEDICO */
export const TitleMedico = styled.Text`
    font-size: 16px;
    font-family: 'Montserrat_500Medium';
`

/* ESPECIALIDADE */
export const ParagraphMedico = styled.Text`
    font-size: 14px;
    font-family: 'Quicksand_500Medium';
    color: #8C8A97;
`

/* AJUSTE DE IMAGEM */
export const ImageMedico = styled.Image`
    width: 77px;
    height: 80px;
    margin-right: 10px;
`

export const LittleBox = styled.View`
    flex-direction: column;
    justify-content: center;
`





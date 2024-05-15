import styled from "styled-components"

/* CAIXA DE ALINHAMENTO GERAL BACKGROUND */
export const BoxCard = styled.View`
    width: 340px;
    height:102px;
    border-radius: 5px;
    background-color: #FFFF;
    padding:10px;
    flex-direction: row;
    margin-top: 10px;
`

/* TITULO NOME MEDICO */
export const TitleCard = styled.Text`
    font-size: 16px;
    font-family: 'Montserrat_500Medium';
`

/* IDADE E TIPO DE CONSULTA */
export const ParagraphCard = styled.Text`
    font-size: 14px;
    font-family: 'Quicksand_500Medium';
    color: #8C8A97;
`

/* AJUSTE DE IMAGEM */
export const ImageCard = styled.Image`
    width: 77px;
    height: 80px;
    margin-right: 10px;
`

export const AlignBox = styled.View`
    flex-direction: column;
    justify-content: center;
`

export const BoxButtons = styled.TouchableOpacity`
    width: 100px;
    height: 26px;
    background-color: ${props => `#${props.color}`};
    border-radius: 5px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 11px;
`
export const TextCancel = styled.Text`
    color: ${props => `#${props.color}`};
    font-family: 'Montserrat_800ExtraBold';
    font-size: 14px;
`

export const TextHour = styled.Text`
    color: ${props => `#${props.color}`};
    font-family: 'Montserrat_800ExtraBold';
    font-size: 14px;
    margin-left: 5px;
`



import styled from "styled-components"
import { TouchableOpacity } from "react-native"

/* CAIXA DE ALINHAMENTO GERAL BACKGROUND */
export const BoxClinica = styled.TouchableOpacity`
    width: 320px;
    height:84px;
    border-radius: 5px;
    background-color: #FFFF;
    padding:18px;
    margin-bottom: 12px;
`




/* BOX COM ICONE DE CALENDARIO E TEXTO DOS DIAS DA SEMANA */
export const BoxWeek = styled.View`
    background-color: #E8FCFD;
    width:100px;
    height: 26px;
    border-radius: 5px;
    border-width: 0px;
    padding-top: 4px;
    padding-bottom: 3px;
    padding-right: 13px;
    padding-left: 14px;
    align-items: center;
    flex-direction: row;
    position: fixed;
    bottom: 40px;
    left: 185px
`

export const TextWeek = styled.Text`
    font-size: 14px;
    color: #49B3BA;
    font-family: 'Quicksand_500Medium';
    margin-left: 5px;
`





/* NOME DA CLINICA */
export const TitleClinica = styled.Text`
    font-size: 16px;
    font-family: 'Montserrat_500Medium';
`

/* ESTADO E CIDADE  */
export const ParagraphClinica = styled.Text`
    font-size: 14px;
    font-family: 'Quicksand_500Medium';
`





/*  NOTA DA CLINICA */
export const BoxStar = styled.View`
    width: 42px;
    height: 20px;
    flex-direction: row;
    align-items: center;
    position: fixed;
    bottom: 50px;
    left: 250px

`

export const NumberStar = styled(ParagraphClinica)`
    color: #F9A620;
    margin-left: 2px;

`


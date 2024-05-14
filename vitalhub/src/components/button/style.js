import styled from "styled-components";
import { Feather } from '@expo/vector-icons';


export const Button = styled.TouchableOpacity`
    width: 320px;
    height: 44px;
    background-color: #496BBA;
    border: #496BBA;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    padding: 8px 12px;
`

export const ButtonTitle = styled.Text`
    font-size: 16px;
    font-family: 'Montserrat_800ExtraBold';
    color: #FFFFFF;
    text-transform: uppercase;
`

export const ButtonGoogle = styled(Button)`
    justify-content: space-evenly;
    border-color: #496BBA;
    background-color: #FAFAFA;
    margin-top: 15px;
    flex-direction: row;
`

export const TitleGoogle = styled(ButtonTitle)`
    color: #496BBA;
    
`

export const ButtonCon = styled.TouchableOpacity`
    width: 85px;
    height: 40px;
    border-color: #60BFC5;
    background-color: #FBFBFB;
    border-width: 2px;
    align-items : center;
    justify-content: center;
    border-radius: 5px;
`

export const TitleCon = styled.Text`
    font-size: 14px;
    color: #60BFC5;
    font-family: 'Montserrat_500Medium';

`

export const Return = styled.TouchableOpacity`
    position: fixed;
`

export const BoxButtonEnviar = styled.TouchableOpacity`
    height: 44px;
    width: 172px;
    background-color: #49B3BA;
    border-radius: 5px;
    justify-content: center;
    align-items: center;
    flex-direction: row;
`

export const BoxOptions = styled.TouchableOpacity`
    width: 100px;
    height: 40px;
    background-color: ${props => props.activate ? "#607EC5" : "#FBFBFB"};
    justify-content: center;
    align-items: center;
    border: 2px solid #607EC5;
    border-radius: 8px;
    `

export const TextOptions = styled.Text`
    font-size: 14px;
    color: ${props => props.activate ? "#FBFBFB" : "#607EC5"};
    font-family: 'Montserrat_800ExtraBold';
`
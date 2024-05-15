import styled from "styled-components";
import { LinearGradient } from 'expo-linear-gradient'


export const BackgroundGradient = styled(LinearGradient)`
    width: 100%;
    height: 144px;
    border-radius: 25px;
    flex-direction: row;
    align-items: center;
    padding: 20px;
`

export const CardList = styled.FlatList`
    margin-top: 20px;
`

export const ViewFooter = styled.View`
    width: 100%;
    height: 60px;
    background-color: #FFF;
    padding-left: 40px;
    padding-right: 40px;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    margin-top: 15px;
`

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
import styled from "styled-components";

export const Text = styled.Text`
    font-size: 14px;
    color: #8C8A97;
    font-family: 'Montserrat_500Medium';
    margin-right: 155px;
    text-decoration: underline;
    margin-bottom: 30px;
`
export const ViewText = styled.View`
    align-items: center;
    flex-direction: row;
    height: 20px;
    width: 284px;
    margin-top: 30px;
    margin-bottom: 50px;
`

export const TextAcount = styled.Text`
    font-family: 'Montserrat_500Medium';
    font-size: 14px;
    color: #000;
`

export const TextMake = styled(TextAcount)`
    text-decoration: underline;
    color: #4D659D;
    margin-left: 2px;
`

export const TextMakeEmail = styled(TextMake)`
    margin-top: 30px;
`

export const ViewInput = styled.View`
    flex-direction: row;
    width: 320px;
    justify-content: space-between;
`
import { TouchableHighlight } from "react-native"
import { Button, ButtonTitle, ButtonGoogle, TitleGoogle, ButtonCon, TitleCon } from "./style"
import { AntDesign } from '@expo/vector-icons';


export const NormalButton = ({
    title,
    onPress
}) => {
    return (
        <Button onPress={onPress}>
            <ButtonTitle>{title}</ButtonTitle>
        </Button>
    )
}

export const GoogleButton = ({
    title

}) => {
    return (
        <ButtonGoogle>
            <AntDesign name="google" size={24} color="#496BBA" />
            <TitleGoogle>{title}</TitleGoogle>
        </ButtonGoogle>
    )
}

export const ButtonConsulta = ({
    title
}) => {
    return (
        <ButtonCon>
            <TitleCon>{title}</TitleCon>
        </ButtonCon>
    )
}

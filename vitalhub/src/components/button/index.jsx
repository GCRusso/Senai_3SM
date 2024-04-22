import { TouchableHighlight } from "react-native"
import { Button, ButtonTitle, ButtonGoogle, TitleGoogle, ButtonCon, TitleCon, Return  } from "./style"
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';


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

export const ButtonReturn = ({
    onPress
}) => {
    return (
            <Feather name="arrow-left-circle" size={30} color="#34898F" onPress={onPress} />
       
    )
}

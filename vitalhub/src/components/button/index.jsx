import { Button, ButtonTitle, ButtonGoogle, TitleGoogle, ButtonCon, TitleCon, BoxButtonEnviar, BoxOptions, TextOptions } from "./style"
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Text } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';

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


export const ButtonEnviar = ({
    title,
    onPress
}) => {
    return (
        <BoxButtonEnviar onPress={onPress}>
            <MaterialCommunityIcons name="camera-plus-outline" size={24} color="white" />
            <Text style={{
                color: '#FFFF',
                fontFamily: 'Montserrat_800ExtraBold',
                fontSize: 14,
                marginLeft: 10
            }}>{title}</Text>
        </BoxButtonEnviar>
    )
}

export const OptionsButton = ({
    title,
    onPress,
    activate = false
}) => {
    return (
        <BoxOptions activate={activate} onPress={onPress}>
            <TextOptions activate={activate}>{title}</TextOptions>
        </BoxOptions>
    )
}
import { TouchableHighlight } from "react-native"
import { Button, ButtonTitle, ButtonGoogle, TitleGoogle } from "./style"


export const NormalButton = ({
    title
}) => {
    return (
        <Button>
            <ButtonTitle>{title}</ButtonTitle>
        </Button>
    )
}

export const GoogleButton = ({
    title,

}) => {
    return (
        <ButtonGoogle>
            <TitleGoogle>{title}</TitleGoogle>
        </ButtonGoogle>
    )
}
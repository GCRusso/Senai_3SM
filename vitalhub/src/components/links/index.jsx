
import { BoxLink, TextLink, TextLinkGrey } from "./Style";



export const LinkMedium = ({
    title,
    onPress
}) => {
    return (
            <TextLink onPress={onPress}>{title}</TextLink>
    )
}

export const LinkMediumGrey = ({
    title,
    onPress
}) => {
    return (
            <TextLinkGrey onPress={onPress}>{title}</TextLinkGrey>
    )
}
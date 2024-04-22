
import { BoxLink, TextLink } from "./Style";



export const LinkMedium = ({
    title,
    onPress
}) => {
    return (
            <TextLink onPress={onPress}>{title}</TextLink>
    )
}

import { BoxClinica, BoxStar, BoxWeek, NumberStar, ParagraphClinica, TextWeek, TitleClinica } from "./style"
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';


export const Clinica = ({
    title,
    paragraph,
    star,
    week,
    onPress
}) => {
    return (
        <BoxClinica onPress={onPress}>
            <TitleClinica>{title}</TitleClinica>

            <ParagraphClinica>{paragraph}</ParagraphClinica>

            <BoxStar>
                <AntDesign name="star" size={14} color="#F9A620" />
                <NumberStar>{star}</NumberStar>
            </BoxStar>

            <BoxWeek>
                <Entypo name="calendar" size={14} color="#49B3BA" />
                <TextWeek>{week}</TextWeek>
            </BoxWeek>

        </BoxClinica>
    )
}

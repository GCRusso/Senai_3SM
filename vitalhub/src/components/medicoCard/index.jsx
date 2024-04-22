import { BoxMedico, ParagraphMedico, TitleMedico, Image } from "./style"

export const Medico = ({
    title,
    paragraph,
    onPress,
}) => {
    return (
        <BoxMedico onPress={onPress}>


            <TitleMedico>{title}</TitleMedico>

            <ParagraphMedico>{paragraph}</ParagraphMedico>


        </BoxMedico>
    )
}

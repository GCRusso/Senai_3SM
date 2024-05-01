import { BoxMedico, ParagraphMedico, TitleMedico, LittleBox } from "./style"
import { ImageMedico } from "./style"

export const Medico = ({
    title,
    paragraph,
    onPress,
    image
}) => {
    return (
        <BoxMedico onPress={onPress}>
            <ImageMedico source={{ uri: `https://i.pinimg.com/564x/08/04/cc/0804cc34865f02fe48d99704af4d2c03.jpg` }} />

            <LittleBox>
                <TitleMedico>{title}</TitleMedico>

                <ParagraphMedico>{paragraph}</ParagraphMedico>
            </LittleBox>


        </BoxMedico>
    )
}

import { BoxCard, ImageCard, AlignBox, TitleCard, ParagraphCard, BoxButtons, TextButtons } from "./styles"
import { View } from "react-native"
import { AntDesign } from '@expo/vector-icons';

export const ConsultaCard = ({
    title,
    idade,
    tipoConsulta,
    onPress,
    hour,
    situacao = "pendente",
}) => {
    return (
        <BoxCard>
            <ImageCard source={{ uri: `https://i.pinimg.com/564x/08/04/cc/0804cc34865f02fe48d99704af4d2c03.jpg` }} />

            <AlignBox>
                <TitleCard>{title}</TitleCard>

                <View flexDirection ='row'>
                    <ParagraphCard style={{marginRight: 5}}>{idade}</ParagraphCard>
                    <ParagraphCard style={{marginRight: 5}}>-</ParagraphCard>
                    <ParagraphCard>{tipoConsulta}</ParagraphCard>
                </View>

                <View flexDirection= 'row' >
                    <BoxButtons onPress={onPress}>
                        <AntDesign name="clockcircleo" size={14} color="#49B3BA" />
                        <TextButtons>{hour}</TextButtons>
                    </BoxButtons>

                    <BoxButtons onPress={onPress} style={{ backgroundColor: '#FFF', marginLeft: 13 }}>
                        <TextButtons style={{ color: '#C81D25' }}>Cancelar</TextButtons>
                    </BoxButtons>
                </View>

            </AlignBox>


        </BoxCard >
    )
}

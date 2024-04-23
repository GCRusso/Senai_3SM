import { useState } from "react";
import { ConsultationModal } from "../../components/ConsultationModal/ConsultationModal";
import { Title } from "../../components/title/style";
import { Button, View } from "react-native";

export const TesteModal = () => {
/* modal = le a informação e o setModal altera a informação */
    const [modal, setModal] = useState(false);

    return (

        <>
            <View 
                style = {{flex: 1}}
            >
                <Button
                    title={'TesteModal'}
                    onPress={() => setModal(true)}
                />
            </View>

            <ConsultationModal
                visible = {modal}
            />
        </>
    )
}
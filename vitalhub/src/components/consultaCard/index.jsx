import { BoxCard, ImageCard, AlignBox, TitleCard, ParagraphCard, BoxButtons, TextHour, TextCancel } from "./styles"
import { View } from "react-native"
import { AntDesign } from '@expo/vector-icons';
import { MedicoModal } from "../medicoModal";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { CancelarConsultaModal } from "../cancelarConsultaModal";
import {ProntuarioModal } from "../prontuarioModal";
export const ConsultaCard = ({
    title,
    idade,
    tipoConsulta,
    onPress,
    hour,
    situacao = "pendente",
}) => {
    const navigation = useNavigation();
    const [modal, setModal] = useState(false);
    const [modalCancelar, setModalCancelar] = useState(false);
    const [usuario, setUsuario] = useState("Medico")
    const [modalProntuario, setModalProntuario] = useState(false);

    return (
        <View>

            {usuario == "paciente" ? (

                <>

                    <BoxCard>
                        <ImageCard source={{ uri: `https://i.pinimg.com/564x/08/04/cc/0804cc34865f02fe48d99704af4d2c03.jpg` }} />

                        <AlignBox>
                            <TitleCard>{title}</TitleCard>

                            <View flexDirection='row'>
                                <ParagraphCard style={{ marginRight: 5 }}>{idade} anos</ParagraphCard>
                                <ParagraphCard style={{ marginRight: 5 }}>-</ParagraphCard>
                                <ParagraphCard>{tipoConsulta}</ParagraphCard>
                            </View>

                            <View flexDirection='row' >


                                {/* ÍCONE DO RELOGIO, MUDANÇA DE COR */}
                                <BoxButtons
                                    situacao={situacao}
                                    color={situacao == "pendente" ? "#E8FCFD" : "#F1F0F5"}
                                >
                                    {
                                        situacao == "pendente" ? (

                                            <AntDesign
                                                situacao={situacao}
                                                name="clockcircleo"
                                                size={14}
                                                color="#49B3BA"
                                                onPress={() => setModal(true)}
                                            />
                                        ) : situacao == "cancelada" ? (

                                            <AntDesign
                                                situacao={situacao}
                                                name="clockcircleo"
                                                size={14}
                                                color="#4E4B59"
                                            />
                                        ) : (
                                            <AntDesign
                                                situacao={situacao}
                                                name="clockcircleo"
                                                size={14}
                                                color="#4E4B59"
                                            />
                                        )
                                    }
                                    {/* MUDANÇA DE COR DO TEXTO DAS HORAS */}
                                    <TextHour color={situacao == "pendente" ? "49B3BA" : "4E4B59"}>{hour}</TextHour>
                                </BoxButtons>


                                {/* BOTÃO CANCELAR */}
                                {
                                    situacao == 'realizado' ? (
                                        < BoxButtons
                                            situacao={situacao}
                                            onPress={onPress}
                                            color={'#FFFF'}
                                            style={{ marginLeft: 13 }}
                                        >
                                            <TextCancel
                                                onPress={() => navigation.replace("DadosConsulta")}
                                                color={situacao == "pendente" ? "C81D25" : "607EC5"}>Prontuario</TextCancel>
                                        </BoxButtons>
                                    ) : situacao == 'pendente' ? (

                                        <BoxButtons
                                            situacao={situacao}
                                            onPress={onPress}
                                            color={'#FFFF'}
                                            style={{ marginLeft: 13 }}
                                        >
                                            <TextCancel
                                                onPress={() => setModalCancelar(true)}
                                                color={situacao == "pendente" ? "C81D25" : "4E4B59"}>Cancelar</TextCancel>
                                        </BoxButtons>

                                    ) : (

                                        < BoxButtons
                                            situacao={situacao}
                                            onPress={onPress}
                                            color={'#FFFF'}
                                            style={{ marginLeft: 13 }}
                                        />

                                    )
                                }

                            </View>
                        </AlignBox>
                    </BoxCard >

                    <MedicoModal
                        visible={modal}
                        onClose={() => setModal(false)}
                        navigation={() => navigation.replace("LocalClinica")}
                    />

                    <CancelarConsultaModal
                        visible={modalCancelar}
                        onClose={() => setModalCancelar(false)}
                        navigation={() => navigation.replace("HomePaciente")}
                    />
                </>

            ) : (
                <>

                    <BoxCard>
                        <ImageCard source={{ uri: `https://i.pinimg.com/564x/08/04/cc/0804cc34865f02fe48d99704af4d2c03.jpg` }} />

                        <AlignBox>
                            <TitleCard>{title}</TitleCard>

                            <View flexDirection='row'>
                                <ParagraphCard style={{ marginRight: 5 }}>{idade} anos</ParagraphCard>
                                <ParagraphCard style={{ marginRight: 5 }}>-</ParagraphCard>
                                <ParagraphCard>{tipoConsulta}</ParagraphCard>
                            </View>

                            <View flexDirection='row' >


                                {/* ÍCONE DO RELOGIO, MUDANÇA DE COR */}
                                <BoxButtons
                                    situacao={situacao}
                                    color={situacao == "pendente" ? "#E8FCFD" : "#F1F0F5"}
                                >
                                    {
                                        situacao == "pendente" ? (

                                            <AntDesign
                                                situacao={situacao}
                                                name="clockcircleo"
                                                size={14}
                                                color="#49B3BA"
                                                onPress={() => setModal(true)}
                                            />
                                        ) : situacao == "cancelada" ? (

                                            <AntDesign
                                                situacao={situacao}
                                                name="clockcircleo"
                                                size={14}
                                                color="#4E4B59"
                                            />
                                        ) : (
                                            <AntDesign
                                                situacao={situacao}
                                                name="clockcircleo"
                                                size={14}
                                                color="#4E4B59"
                                            />
                                        )
                                    }
                                    {/* MUDANÇA DE COR DO TEXTO DAS HORAS */}
                                    <TextHour color={situacao == "pendente" ? "49B3BA" : "4E4B59"}>{hour}</TextHour>
                                </BoxButtons>


                                {/* BOTÃO CANCELAR */}
                                {
                                    situacao == 'realizado' ? (
                                        < BoxButtons
                                            situacao={situacao}
                                            onPress={onPress}
                                            color={'#FFFF'}
                                            style={{ marginLeft: 13 }}
                                        >
                                            <TextCancel
                                                onPress={() => setModalProntuario(true)}
                                                color={situacao == "pendente" ? "C81D25" : "607EC5"}>Prontuario</TextCancel>
                                        </BoxButtons>
                                    ) : situacao == 'pendente' ? (

                                        <BoxButtons
                                            situacao={situacao}
                                            onPress={onPress}
                                            color={'#FFFF'}
                                            style={{ marginLeft: 13 }}
                                        >
                                            <TextCancel
                                                onPress={() => setModalCancelar(true)}
                                                color={situacao == "pendente" ? "C81D25" : "4E4B59"}>Cancelar</TextCancel>
                                        </BoxButtons>

                                    ) : (

                                        < BoxButtons
                                            situacao={situacao}
                                            onPress={onPress}
                                            color={'#FFFF'}
                                            style={{ marginLeft: 13 }}
                                        />

                                    )
                                }

                            </View>
                        </AlignBox>
                    </BoxCard >

                    <ProntuarioModal
                        visible={modalProntuario}
                        onClose={() => setModalProntuario(false)}
                        navigation={() => navigation.replace("DadosConsulta")}
                    />

                    <CancelarConsultaModal
                        visible={modalCancelar}
                        onClose={() => setModalCancelar(false)}
                        navigation={() => navigation.replace("HomePaciente")}
                    />
                </>
            )
            }
        </View>
    )
}

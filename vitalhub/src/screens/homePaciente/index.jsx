import { Container } from "../../components/container/style"
import { Paragraph } from "../../components/paragraph/style"
import { Title } from "../../components/title/style"
import { View, Image, Text } from "react-native"
import { Feather } from '@expo/vector-icons';
import { useState } from "react";
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native";
import { CalendarHome } from "../../components/calendarHome";

//MODAIS
import { ConsultationModal } from "../../components/consultationModal";
import { MedicoModal } from "../../components/medicoModal";
import { ProntuarioModal } from "../../components/prontuarioModal";

import { BackgroundGradient, CardList, ViewFooter } from "./style"
import { ButtonModalHome, OptionsButton } from "../../components/button";
import { ConsultaCard } from "../../components/consultaCard";



export const HomePaciente = ({ navigation }) => {

    const [modal, setModal] = useState(false);
    const [modalProntuario, setModalProntuario] = useState(false);
    const [modalMedico, setModalMedico] = useState(false);

    const [usuario, setUsuario] = useState("Paciente")

    const [statusLista, setStatusLista] = useState("pendente")

    const consultas = [
        {
            id: 1,
            title: 'Dra. Maria Luiza',
            idade: '28',
            tipoConsulta: 'Rotina',
            hour: '14:00',
            situacao: 'realizado'
        },
        {
            id: 2,
            title: 'Dr. Marcos Rodolfo',
            idade: '45',
            tipoConsulta: 'Rotina',
            hour: '15:30',
            situacao: 'pendente'
        },
        {
            id: 3,
            title: 'Dr. Angelo Martim',
            idade: '54',
            tipoConsulta: 'Cirurgia',
            hour: '11:30',
            situacao: 'cancelada'
        },
        {
            id: 4,
            title: 'Dr. Angelo Martim',
            idade: '54',
            tipoConsulta: 'Cirurgia',
            hour: '11:30',
            situacao: 'cancelada'
        },
        {
            id: 5,
            title: 'Dr. Angelo Martim',
            idade: '54',
            tipoConsulta: 'Cirurgia',
            hour: '11:30',
            situacao: 'cancelada'
        },
        {
            id: 6,
            title: 'Dr. Angelo Martim',
            idade: '54',
            tipoConsulta: 'Cirurgia',
            hour: '11:30',
            situacao: 'cancelada'
        },
        {
            id: 7,
            title: 'Dr. Angelo Martim',
            idade: '54',
            tipoConsulta: 'Cirurgia',
            hour: '11:30',
            situacao: 'cancelada'
        },
    ]

    return (
        <>
            <View style={{ flex: 1 }}>

                {/* HEADER AZUL */}
                <BackgroundGradient colors={['#60BFC5', '#496BBA']}>

                    <Image style={{ maxHeight: 60 }} source={require("../../../assets/images/fotoPerfil.png")} />

                    <View style={{ marginLeft: 10, marginRight: 108 }}>
                        <Paragraph>Bem Vindo</Paragraph>
                        <Title style={{ color: '#FFF' }}>Gabriel Russo</Title>
                    </View>

                    <Feather name="bell" size={30} color="white" />

                </BackgroundGradient>


                {/* CALENDÁRIO */}
                <CalendarHome />



                <Container>

                    {/* BOTÕES SELEÇÃO DE LISTA */}
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: 340, marginTop: 38 }}>
                        <OptionsButton
                            title={"Agendadas"}
                            activate={statusLista === "pendente"}
                            onPress={() => setStatusLista("pendente")}
                        />

                        <OptionsButton
                            title={"Realizadas"}
                            activate={statusLista === "realizado"}
                            onPress={() => setStatusLista("realizado")}
                        />

                        <OptionsButton
                            title={"Canceladas"}
                            activate={statusLista === "cancelada"}
                            onPress={() => setStatusLista("cancelada")}
                        />
                    </View>

                    {
                        statusLista == "pendente" ? (

                            <CardList
                                data={consultas}
                                keyExtractor={(item) => item.id}
                                renderItem={({ item }) => item.situacao === "pendente" ?
                                    <ConsultaCard
                                        title={item.title}
                                        idade={item.idade}
                                        tipoConsulta={item.tipoConsulta}
                                        hour={item.hour}
                                        situacao={item.situacao}
                                    /> : <></>}
                            />

                        ) : statusLista == "realizado" ? (

                            <CardList
                                data={consultas}
                                keyExtractor={(item) => item.id}
                                renderItem={({ item }) => item.situacao === "realizado" ?
                                    <ConsultaCard
                                        title={item.title}
                                        idade={item.idade}
                                        tipoConsulta={item.tipoConsulta}
                                        hour={item.hour}
                                        situacao={item.situacao}
                                    /> : <></>}
                            />

                        ) : (

                            <CardList
                                data={consultas}
                                keyExtractor={(item) => item.id}
                                renderItem={({ item }) => item.situacao === "cancelada" ?
                                    <ConsultaCard
                                        title={item.title}
                                        idade={item.idade}
                                        tipoConsulta={item.tipoConsulta}
                                        hour={item.hour}
                                        situacao={item.situacao}
                                    /> : <></>}
                            />
                        )
                    }


                    {/* BOTÃO MÉDICO ABERTURA MODAL */}
                    {usuario == "Paciente" ? (
                        <View style={{ alignSelf: 'flex-end' }}>
                            <ButtonModalHome onPress={() => setModal(true)} />


                        </View>
                    ):(
                    <></>
                    )}

                </Container>

                <ViewFooter>
                    <TouchableOpacity onPress={() => setModalProntuario(true)} style={{ width: 92, height: 33, backgroundColor: '#ECF2FF', borderRadius: 20, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                        <FontAwesome6 name="calendar-check" size={22} color="#607EC5" />
                        <Text style={{ color: '#607EC5', marginLeft: 5, fontSize: 12, fontFamily: 'Quicksand_500Medium' }}>Agenda</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => setModalMedico(true)}>
                        <FontAwesome5 name="user-circle" size={24} color="black" />
                    </TouchableOpacity>
                </ViewFooter>
            </View >

            <ConsultationModal
                visible={modal}
                onClose={() => setModal(false)}
                navigation={() => navigation.navigate("SelecionarData")}
            />

            <ProntuarioModal
                visible={modalProntuario}
                onClose={() => setModalProntuario(false)}
                navigation={() => navigation.navigate("SelecionarData")}
            />

            <MedicoModal
                visible={modalMedico}
                onClose={() => setModalMedico(false)}
                navigation={() => navigation.navigate("LocalClinica")}
            />
        </>
    )
}
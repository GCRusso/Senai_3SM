import { Container } from "../../components/container/style"
import { Paragraph } from "../../components/paragraph/style"
import { Title } from "../../components/title/style"
import { View, Image } from "react-native"
import { Feather } from '@expo/vector-icons';
import { useState } from "react";

import { CalendarHome } from "../../components/calendarHome";

import { BackgroundGradient, CardList } from "./style"

import { OptionsButton } from "../../components/button";
import { ConsultaCard } from "../../components/consultaCard";



export const HomePaciente = ({ navigation }) => {

    const [statusLista, setStatusLista] = useState("pendente")

    const consultas = [
        {
            id: 1,
            title: 'Dra. Maria Luiza',
            idade: '28 anos',
            tipoConsulta: 'Rotina',
            hour: '14:00',
            situacao: 'realizado'
        },
        {
            id: 2,
            title: 'Dr. Marcos Rodolfo',
            idade: '45 anos',
            tipoConsulta: 'Rotina',
            hour: '15:30',
            situacao: 'pendente'
        },
        {
            id: 3,
            title: 'Dr. Angelo Martim',
            idade: '54 anos',
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
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: 340 }}>
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
                            renderItem={({ item }) => item.situacao === "realizado" ?
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
                   

                </Container>
            </View >
        </>
    )
}
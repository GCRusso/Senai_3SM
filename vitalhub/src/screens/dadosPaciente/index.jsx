import { Container } from "../../components/container/style"
import { InputDadosPacienteG, InputDadosPacienteP } from "../../components/input/style";
import { Title } from "../../components/title/style"
import { View, ScrollView, Image, TouchableOpacity, Text } from "react-native";
import { BoxInputG } from "./style";
import { FontAwesome6, FontAwesome5 } from '@expo/vector-icons';
import { ViewFooter } from "../homePaciente/style";


import { ButtonCamera, NormalButton, NormalButtonCinza } from "../../components/button";

export const DadosPaciente = ({ navigation }) => {

      
    return (
        <ScrollView style={{backgroundColor: '#FFF'}}>
            <Container>

                <View >
                    <Image style={{ maxHeight: 320 }} source={require("../../../assets/images/DRA.Maria_Luiza.jpg")} />
                    <ButtonCamera onPress={() => navigation.navigate("Camera")}/>
                </View>

                {/* NOME */}
                <BoxInputG>
                    <Title style={{ marginBottom: 6, alignSelf: 'flex-start' }}>Nome</Title>
                    <InputDadosPacienteG />
                </BoxInputG>

                {/* RG */}
                <BoxInputG>
                    <Title style={{ marginBottom: 6, alignSelf: 'flex-start', marginTop: 25 }}>RG</Title>
                    <InputDadosPacienteG />
                </BoxInputG>

                {/* DATA DE NASCIMENTO */}
                <BoxInputG>
                    <Title style={{ marginBottom: 6, alignSelf: 'flex-start', marginTop: 25 }}>Data de nascimento</Title>
                    <InputDadosPacienteG />
                </BoxInputG>

                {/* CPF */}
                <BoxInputG>
                    <Title style={{ marginBottom: 6, alignSelf: 'flex-start', marginTop: 25 }}>CPF</Title>
                    <InputDadosPacienteG />
                </BoxInputG>

                {/* LOGRADOURO E NÚMERO */}
                <BoxInputG style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{ width: 144 }}>
                        <Title style={{ marginBottom: 6, alignSelf: 'flex-start', marginTop: 25 }}>Logradouro</Title>
                        <InputDadosPacienteP />
                    </View>

                    <View style={{ width: 144 }}>
                        <Title style={{ marginBottom: 6, alignSelf: 'flex-start', marginTop: 25 }}>Número</Title>
                        <InputDadosPacienteP />
                    </View>
                </BoxInputG>


                {/* CEP E CIDADE */}
                <BoxInputG style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 30 }}>
                    <View style={{ width: 144 }}>
                        <Title style={{ marginBottom: 6, alignSelf: 'flex-start', marginTop: 25 }}>CEP</Title>
                        <InputDadosPacienteP />
                    </View>

                    <View style={{ width: 144 }}>
                        <Title style={{ marginBottom: 6, alignSelf: 'flex-start', marginTop: 25 }}>Cidade</Title>
                        <InputDadosPacienteP />
                    </View>
                </BoxInputG>

                <NormalButton
                    title='Salvar'
                />

                <View style={{ marginBottom: 30 }} />

                <NormalButton
                    title='Editar'
                />

                <View style={{ marginBottom: 30 }} />

                <NormalButtonCinza
                    title='Sair do app'
                />



            </Container>

            <ViewFooter>
                <TouchableOpacity style={{ width: 92, height: 33, backgroundColor: '#ECF2FF', borderRadius: 20, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                    <FontAwesome6 name="calendar-check" size={22} color="#607EC5" />
                    <Text style={{ color: '#607EC5', marginLeft: 5, fontSize: 12, fontFamily: 'Quicksand_500Medium' }}>Agenda</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <FontAwesome5 name="user-circle" size={24} color="black" />
                </TouchableOpacity>
            </ViewFooter>
        </ScrollView>
    )

};
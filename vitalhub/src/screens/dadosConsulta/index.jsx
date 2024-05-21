import { Container } from "../../components/container/style"
import { Title } from "../../components/title/style"
import { Paragraph } from "../../components/paragraph/style"
import { SimpleLineIcons } from '@expo/vector-icons';
import { View, ScrollView, Image } from "react-native";
import { TitleBox, BackgroundBox } from "./style";
import { ButtonEnviar, NormalButton, NormalButtonCinzaG } from "../../components/button/index"
import { LinkMedium } from "../../components/links";

import { useState } from "react";
import { InputPrescricaoG, InputPrescricaoP, InputText } from "../../components/input/style";
import { BsBorderWidth } from "react-icons/bs";


export const DadosConsulta = ({ navigation }) => {

    const [usuario, setUsuario] = useState("medico"

    )
    return (
        <ScrollView>
            <Container style={{ backgroundColor: '#FFF' }}>
            

                {usuario == "medico" ? (
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

                        <View>
                            <Image style={{ maxHeight: 320 }} source={require("../../../assets/images/picturePaciente.png")} />
                        </View>


                        <Title style={{ marginBottom: 6 }}>Richard Kosta</Title>

                        <View style={{ flexDirection: 'row' }}>
                            <Paragraph style={{ marginRight: 20 }}>22 anos</Paragraph>
                            <Paragraph>richard.kosta@gmail.com</Paragraph>
                        </View>


                        {/*  DESCRIÇÃO DA CONSULTA */}
                        <View style={{ justifyContent: 'flex-start', marginTop: 28 }}>
                            <TitleBox style={{ marginBottom: 10 }} >Descrição da consulta</TitleBox>

                            <InputPrescricaoG
                                placeholder="Descrição"
                                placeholderTextColor='#34898F'
                            />
                        </View>


                        {/*  DIAGNOSTICO DO PACIENTE */}
                        <View style={{ justifyContent: 'flex-start', marginTop: 28 }}>
                            <TitleBox style={{ marginBottom: 10 }} >Diagnóstico do paciente</TitleBox>

                            <InputPrescricaoP
                                placeholder="Diagnóstico"
                                placeholderTextColor='#34898F'
                            />
                        </View>


                        {/*  PRESCRIÇÃO MÉDICA */}
                        <View style={{ justifyContent: 'flex-start', marginTop: 28, marginBottom: 30 }}>
                            <TitleBox style={{ marginBottom: 10 }} >Prescrição médica</TitleBox>

                            <InputPrescricaoG
                                placeholder="Prescrição médica"
                                placeholderTextColor='#34898F'
                            />
                        </View>
                        

                        {/* BOTÕES */}
                        <View style={{ height: 230, justifyContent: 'space-around', width: 400, alignItems:'center' }}>

                            <NormalButton
                                title='Salvar'
                            />

                            <NormalButtonCinzaG
                                title='Editar'
                            />

                            <LinkMedium
                                title='Cancelar'
                            />

                        </View>
                        

                    </View>
                ) : (

                    //***************************** PARTE DO USUÁRIO COMUM ******************************

                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

                        <View>
                            <Image style={{ maxHeight: 320 }} source={require("../../../assets/images/DRA.Maria_Luiza.jpg")} />
                        </View>

                        <Title style={{ marginBottom: 6 }}>Dra. Maria Luiza</Title>

                        <View style={{ flexDirection: 'row' }}>
                            <Paragraph style={{ marginRight: 20 }}>Ortopedista</Paragraph>
                            <Paragraph>CRM-25678</Paragraph>
                        </View>


                        {/*  DESCRIÇÃO DA CONSULTA */}
                        <View style={{ justifyContent: 'flex-start', marginTop: 28 }}>
                            <TitleBox style={{ marginBottom: 10 }} >Descrição da consulta</TitleBox>

                            <BackgroundBox style={{ height: 121 }}>
                                <Paragraph>O paciente possuí uma fratura no cotovelo esquerdo, necessário uma cirurgia para correção</Paragraph>
                            </BackgroundBox>
                        </View>


                        {/*  DIAGNOSTICO DO PACIENTE */}
                        <View style={{ justifyContent: 'flex-start', marginTop: 28 }}>
                            <TitleBox style={{ marginBottom: 10 }} >Diagnóstico do paciente</TitleBox>

                            <BackgroundBox style={{ height: 53 }}>
                                <Paragraph> Fratura do cotovelo </Paragraph>
                            </BackgroundBox>
                        </View>


                        {/*  PRESCRIÇÃO MÉDICA */}
                        <View style={{ justifyContent: 'flex-start', marginTop: 28 }}>
                            <TitleBox style={{ marginBottom: 10 }} >Prescrição médica</TitleBox>

                            <BackgroundBox style={{ height: 133 }}>
                                <Paragraph>
                                    Medicamento: Tramal
                                </Paragraph>
                                <Paragraph>
                                    Dosagem: 200mg
                                </Paragraph>
                                <Paragraph>
                                    Frequência: 2X ao dia
                                </Paragraph>
                                <Paragraph>
                                    Duração: 7 dias
                                </Paragraph>
                            </BackgroundBox>
                        </View>


                        {/*  EXAMES MÉDICOS */}
                        <View style={{ justifyContent: 'flex-start', marginTop: 28, marginBottom: 10 }}>
                            <TitleBox style={{ marginBottom: 10 }}> Exames médicos </TitleBox>

                            <BackgroundBox style={{ height: 111, alignItems: 'center', flexDirection: 'row' }}>
                                <SimpleLineIcons name="exclamation" size={24} color="black" />
                                <Paragraph style={{ marginLeft: 5 }}> Nenhuma foto informada </Paragraph>
                            </BackgroundBox>
                        </View>

                        {/* BOTÕES */}
                        <View style={{ flexDirection: 'row', alignItems: 'center', width: 320 }}>
                            <ButtonEnviar
                                title='Enviar'
                                onPress={() => navigation.navigate("Login")}
                            />

                            <View style={{ marginLeft: 60 }}>
                                <LinkMedium
                                    title='Cancelar'
                                    onPress={() => navigation.navigate('Login')}
                                />
                            </View>
                        </View>


                        {/* LINHA DE SEPARAÇÃO */}
                        < View style={{ backgroundColor: '#8C8A97', height: 2, width: 320, marginTop: 19 }} />


                        <BackgroundBox style={{ height: 103, alignItems: 'center', flexDirection: 'row', marginTop: 21 }}>
                            <Paragraph> Resultado exame de sangue: Normal </Paragraph>
                        </BackgroundBox>


                        <View style={{ marginBottom: 42, marginTop: 30 }}>
                            <LinkMedium
                                title='Voltar'
                                onPress={() => navigation.navigate('Login')}
                            />
                        </View>

                    </View>

                )
                }
            </Container>
        </ScrollView >
    )

};
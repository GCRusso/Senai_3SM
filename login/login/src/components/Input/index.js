import React, { useState } from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

const Input = (props) => {

    const [security, setSecurity] = useState(props.secureTextEntry);

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                underlineColorAndroid={'transparent'}
                placeholderTextColor={'#7b8794'}
                placeholder= {props.placeholder}
                autoCapitalize="none"
                autoCorrect={false}
                
                {...props}
                secureTextEntry={security}
            />
        
            <Ionicons size={25} color={"grey"} name={props.name} style={styles.icon} />

            {/* Se existe a propriedade secureTextEntry é exibido o ícone de segurança(Eyes) */}
            {props.secureTextEntry && (
                //Ao apertar o icone de segurança(Eyes) a senha torna-se visível
                <TouchableOpacity onPress={() => setSecurity(!security)}>
                    <Ionicons
                        size={25}
                        color={"grey"}
                        name={security ? "eye" : "eye-off"} /*Validação do ícone de segurança */
                        style={styles.iconSecret}
                    />
                </TouchableOpacity>
            )}

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: 20,
    },

    input: {
        height: 50,
        flex: 1,
        backgroundColor: '#F0D800',
        paddingLeft: 60,
        borderRadius: 8,
        marginHorizontal: 20,
        fontSize: 18,
        borderColor: '#19A382',
        borderWidth: 1,
    },

    icon: {
        position: 'absolute',
        left: 35,
        top: 12,
    },

    iconSecret: {
        position: 'absolute',
        right: 30,
        top: 12,
    }
});

export default Input;
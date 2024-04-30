import { useState } from "react";
import { SelectBox, SelectTitle } from "./style";
import { StyleSheet } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import DropDownPicker from "react-native-dropdown-picker";
import SelectDropdown from "react-native-select-dropdown";


export const Select = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentValue, setCurrentValue] = useState();

    const horarios = [
        '7:00',
        '8:00',
        '13:00',
        '15:00',
        '16:00'
    ];

    return (
        <>
            <SelectDropdown
                    data={horarios}
                    onSelect={(selectedItem, index) => {
                        console.log(selectedItem, index);
                    }}
                    defaultButtonText={'Selecionar horário'}
                    buttonTextAfterSelection={(selectedItem, index) => {
                        return selectedItem;
                    }}
                    rowTextForSelection={(item, index) => {
                        return item;
                    }}
                    /* Caixa do select*/
                    buttonStyle={styles.BoxDropdown}

                    /* Texto do select */
                    buttonTextStyle={styles.TextButton}

                    /* ícone do select , aberto e fechado*/
                    renderDropdownIcon={isOpened => {
                        return <AntDesign name={isOpened ? 'caretup' : 'caretdown'} color={'#34898F'} size={22} />;
                    }}

                    /* Posição do ícone na caixa */
                    dropdownIconPosition={'right'}

                    /* Background da barra de rolagem do select */
                    rowStyle={styles.BackgroundRow}

                    /* Texto dentro da barra de rolagem do select */
                    rowTextStyle={styles.TxtRow}

            />


        </>
    )
}

const styles = StyleSheet.create({
    BoxDropdown: {
        width: '90%',
        height: 55,
        backgroundColor: '#FFF',
        borderRadius: 5,
        borderWidth: 2,
        borderColor: '#60BFC5',
        marginTop: 10
    },
    TextButton: { color: '#34898F', textAlign: 'left', fontFamily: 'Montserrat_500Medium', fontSize: 14 },
    BackgroundRow: { backgroundColor: '#EFEFEF', borderWidth:1, borderColor:'#60BFC5', borderBottomWidth:0, },
    TxtRow: { color: '#34898F', textAlign: 'center', fontSize: 20 },
})

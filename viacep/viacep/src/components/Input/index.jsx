import {InputText } from './style';

export function Input({
    placeholder,
    editable,
    fieldValue,
    onChangeText,
    keyType,
    maxLength
}) {

    return (
        <InputText
        placeholder={placeholder}
        editable={editable}
        keyboardType={keyType}
        maxLength={maxLength}
        value= {fieldValue}
        onChangeText={onChangeText}
        />
    )
};
import { FieldContent } from './style';
import { Input } from '../Input';
import { Label } from '../Label';

export const BoxInput = ({
    fieldWidth = 100,
    editable = false,
    textLabel,
    placeholder,
    fieldValue = null,
    onChangeText = null,
    KeyType = "default",
    maxLenght,
}) => {
    return (
        <FieldContent fieldWidth={fieldWidth}>
            {/* Label */}
            <Label textLabel={textLabel} />

            <Input
                placeholder={placeholder}
                editable={editable}
                KeyType={KeyType}
                maxLenght={maxLenght}
                fieldValue={fieldValue}
                onChangeText={onChangeText}
            />
        </FieldContent>
    );
};
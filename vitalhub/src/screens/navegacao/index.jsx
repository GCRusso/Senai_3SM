import { Button, View } from "react-native";

export const Navegacao = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "space-around" }}>

            <Button
                title="Login"
                onPress={() => navigation.navigate("Login")}
            />

            <Button
                title="RecuperarSenha"
                onPress={() => navigation.navigate("RecuperarSenha")}
            />

            <Button
                title="VerificarEmail"
                onPress={() => navigation.navigate("VerificarEmail")}
            />

            <Button
                title="RedefinirSenha"
                onPress={() => navigation.navigate("RedefinirSenha")}
            />

            <Button
                title="CriarConta"
                onPress={() => navigation.navigate("CriarConta")}
            />

            <Button
                title="ConsultationModal"
                onPress={() => navigation.navigate("ConsultationModal")}
            />


        </View>
    );
}
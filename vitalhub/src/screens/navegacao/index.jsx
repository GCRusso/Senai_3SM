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
                title="SelecionarMedico"
                onPress={() => navigation.navigate("SelecionarMedico")}
            />

            <Button
                title="SelecionarClinica"
                onPress={() => navigation.navigate("SelecionarClinica")}
            />

            <Button
                title="SelecionarData"
                onPress={() => navigation.navigate("SelecionarData")}
            />

            <Button
                title="LocalClinica"
                onPress={() => navigation.navigate("LocalClinica")}
            />

            <Button
                title="DadosConsulta"
                onPress={() => navigation.navigate("DadosConsulta")}
            />

            <Button
                title="HomePaciente"
                onPress={() => navigation.navigate("HomePaciente")}
            />

            <Button
                title="DadosPaciente"
                onPress={() => navigation.navigate("DadosPaciente")}
            />

            <Button
                title="Camera"
                onPress={() => navigation.navigate("Camera")}
            />


        </View>
    );
}

import { BoxInput } from "../../components/BoxInput";
import { ContainerForm, ScrollForm } from "./style";
import { useState, useEffect } from "react";
import axios from "axios";


export function Home() {

    const [cep, setCep] = useState("");
    const [logradouro, setLogradouro] = useState("");
    const [bairro, setBairro] = useState("");
    const [cidade, setCidade] = useState("");
    const [estado, setEstado] = useState("");
    const [uf, setUf] = useState("");


    const APIget = async () => {
        try {
            if (cep.length == 8) {

                const endereco = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)

                if (endereco.error) {
                    alert("Erro API")
                }
                console.log(endereco.data)
                setLogradouro(endereco.data.logradouro)
                setBairro(endereco.data.bairro)
                setCidade(endereco.data.estado)
                setUf(endereco.data.uf)

                const ibge = await axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}`)
                console.log(ibge)
                setEstado(ibge.data.nome)
            }
        } catch (error) {
            alert('Erro ao buscar CEP')
        }
    }

    useEffect(() => {
        APIget()
    }), [cep];


    return (
        <ScrollForm>
            
            <ContainerForm>
                <BoxInput
                    textLabel="Informar CEP:"
                    placeholder="Cep..."
                    keyType='numeric'
                    maxLength={8}
                    editable={true}
                    fieldValue={cep}
                    onChangeText={(tx) => setCep(tx)}
                />

                <BoxInput
                    textLabel="Bairro"
                    placeholder="Bairro"
                    keyType="default"
                    editable={true}
                    fieldValue={bairro}
                />

                <BoxInput
                    textLabel="Logradouro / Rua"
                    placeholder="Logradouro"
                    keyType="default"
                    editable={true}
                    fieldValue={logradouro}
                />

                <BoxInput
                    textLabel="Estado"
                    placeholder="Estado"
                    keyType="default"
                    editable={true}
                    fieldValue={estado}
                />

                <BoxInput
                    textLabel="UF"
                    placeholder="UF"
                    keyType="default"
                    editable={true}
                    fieldValue={uf}
                />
            </ContainerForm>
        </ScrollForm>
    );

}
import { useContext } from "react";
import { Contexto } from "../contexts/Contexto";
import Megasena from "../components/Megasena";
import Lotofacil from "../components/Lotofacil";

export default function Principal() {
    const { megasena } = useContext(Contexto);
    return (
        <div>
            <Megasena/>
            <Lotofacil/>
        </div>
    )
}


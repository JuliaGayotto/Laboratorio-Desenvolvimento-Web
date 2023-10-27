import trevo from "../../assets/trevo-megasena.png";
import { useContexto } from "../../hooks";
import "./index.css"

function Megasena() {
    const { megasena } = useContexto();

    return (
        <div id="container-mega">
            <div>
                <div id="logo-titulo-mega">
                    <img src={trevo} alt="" />
                    <span id="nome-mega">MEGA-SENA</span>
                </div>
                <div id="estimativa-mega">
                    <div id="texto-estimativa-mega">
                        Estimativa de prêmio do próximo concurso. Sorteio em{" "}
                        {megasena.dataProximoConcurso}:
                    </div>
                    <div id="valor-estimativa-mega">
                        R$ {(megasena.valorEstimadoProximoConcurso
                        .toFixed(2).replace(".",",") )}
                    </div>
                </div>
            </div>
            <div id="direita-mega">
                <div id="linha-bola-mega">

                </div>
                <div id="texto-acumulou-mega">
                    {megasena.quantidadeGanhadores === 0 ? "ACUMULOU!" : `${megasena.quantidadeGanhadores} GANHADORES`}
                </div>
                <div id="data-concurso-mega">
                    Concurso {megasena.numeroDoConcurso} - {megasena.dataPorExtenso}
                </div>
            </div>
            {/* {JSON.stringify(megasena)} */}
        </div>
    )
}
export default Megasena;
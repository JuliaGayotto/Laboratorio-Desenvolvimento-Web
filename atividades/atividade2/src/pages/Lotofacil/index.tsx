import { useContexto } from "../../hooks";
import "./index.css"
import trevo from "../../assets/trevo-lotofacil.png";
import React from "react";
import Menu from "../../components/Menu";

function Lotofacil() {
    const { lotofacil } = useContexto();

    return (
        <>
            {lotofacil.dataApuracao ? (
                <div id="container-loto">
                <div>
                    <div id="logo-titulo-loto">
                        <img src={trevo} alt="" />
                        <span id="nome-loto">LOTOFÁCIL</span>
                    </div>
                    <div id="estimativa-loto">
                        <div id="texto-estimativa-loto">
                            Estimativa de prêmio do próximo concurso. Sorteio em{" "}
                            {lotofacil.dataProximoConcurso}:
                        </div>
                        <div id="valor-estimativa-loto">
                            R$ {(parseFloat(lotofacil.valorEstimadoProximoConcurso)
                                .toFixed(2).replace(".", ",").replace(/\B(?=(\d{3})+(?!\d))/g, '.'))}
                        </div>
                    </div>
                </div>
                <div id="direita-loto">
                    <div id="linha-loto">
                        {lotofacil.dezenas.map((item, index) => (
                            <>
                                {index < 10 ?
                                    <div className="loto" key={index}>
                                        {item}
                                        {Number.isInteger((index + 1) / 5) && <br></br>}
                                    </div> : <div className="loto-sl" key={index}>
                                        {item}
                                        {Number.isInteger((index + 1) / 5) && <br></br>}
                                    </div>}
                            </>
                        ))}
                    </div>

                    <div id="texto-acumulou-loto">
                        {lotofacil.quantidadeGanhadores === 0 ? "ACUMULOU!" : `${lotofacil.quantidadeGanhadores} GANHADORES`}
                    </div>
                    <div id="data-concurso-loto">
                        Concurso {lotofacil.numeroDoConcurso} - {lotofacil.dataPorExtenso}
                    </div>
                </div>
            </div>
            ) : (
                <div id="carregando-loto">
                    <h3><strong>Carregando...</strong></h3>
                </div>
            )}
        </>
    )
}
export default Lotofacil;
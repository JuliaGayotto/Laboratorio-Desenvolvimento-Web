import trevo from "../../assets/trevo-megasena.png";
import { useContexto } from "../../hooks";
import "./index.css"

function Megasena() {
    const { megasena } = useContexto();

    return (
        <>
            {megasena.dataApuracao ? (
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
                                R$ {(parseFloat(megasena.valorEstimadoProximoConcurso)
                                .toFixed(2).replace(".",",").replace(/\B(?=(\d{3})+(?!\d))/g, '.'))}
                            </div>
                        </div>
                    </div>
                    <div id="direita-mega">
                        <div id="linha-bola-mega">
                            {megasena.dezenas.map((item) => (
                                <div className="bola-mega">
                                    {item}
                                </div>
                            ))}
                        </div>
                        <div id="texto-acumulou-mega">
                            {megasena.quantidadeGanhadores === 0 ? "ACUMULOU!" : `${megasena.quantidadeGanhadores} GANHADORES`}
                        </div>
                        <div id="data-concurso-mega">
                            Concurso {megasena.numeroDoConcurso} - {megasena.dataPorExtenso}
                        </div>
                    </div>
                </div>
            ) :
            (
                <div>
                    <h3>Carregando...</h3>
                </div>
            )
            }
        </>
    )
}
export default Megasena;
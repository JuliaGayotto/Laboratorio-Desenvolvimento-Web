import trevo from "../../assets/trevo-quina.png";
import Menu from "../../components/Menu";
import { useContexto } from "../../hooks";
import "./index.css"

function Megasena() {
    const { quina } = useContexto();

    return (
        <>
            {quina.dataApuracao ? (
                <div id="container-quina">
                    <div>
                        <div id="logo-titulo-quina">
                            <img src={trevo} alt="" />
                            <span id="nome-quina">QUINA</span>
                        </div>
                        <div id="estimativa-quina">
                            <div id="texto-estimativa-quina">
                                Estimativa de prêmio do próximo concurso. Sorteio em{" "}
                                {quina.dataProximoConcurso}:
                            </div>
                            <div id="valor-estimativa-quina">
                                R$ {((parseFloat(quina.valorEstimadoProximoConcurso)
                                .toFixed(2).replace(".",",").replace(/\B(?=(\d{3})+(?!\d))/g, '.'))).toString()}
                            </div>
                        </div>
                    </div>
                    <div id="direita-quina">
                        <div id="linha-bola-quina">
                        {quina.dezenas.map((item: String) => (
                            <div className="bola-quina">
                                {item}
                            </div>
                        ))}
                        </div>
                        <div id="texto-acumulou-quina">
                            {quina.quantidadeGanhadores === 0 ? "ACUMULOU!" : `${quina.quantidadeGanhadores} GANHADORES`}
                        </div>
                        <div id="data-concurso-quina">
                            Concurso {quina.numeroDoConcurso} - {quina.dataPorExtenso}
                        </div>
                    </div>
                </div>
            ) : (
                <div id="carregando-quina">
                    <h3><strong>Carregando...</strong></h3>
                </div>
            )}
        </>
    )
}
export default Megasena;
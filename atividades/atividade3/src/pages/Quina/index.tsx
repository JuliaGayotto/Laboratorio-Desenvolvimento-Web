import trevo from "../../assets/trevo-quina.png";
import CarregandoComponent from "../../components/Carregando/Carregando";
import PrincipalComponent from "../../components/Principal/Principal";
import { useContexto } from "../../hooks";

function Quina() {
    const { quina } = useContexto();

    return (
        <>
            {quina.dataApuracao ? (
                <PrincipalComponent logoSrc={trevo} nomeTexto={"QUINA"} loteria={quina} />
            ) : (
                <CarregandoComponent/>
            )}
        </>
    )
}
export default Quina;
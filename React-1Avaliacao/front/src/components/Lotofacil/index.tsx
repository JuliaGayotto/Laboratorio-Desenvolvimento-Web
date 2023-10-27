import { useContexto } from "../../hooks";
import "./index.css"

function Lotofacil() {
    const { lotofacil } = useContexto();

    return (
        <div id="container-loto">
            {JSON.stringify(lotofacil)}
        </div>
        // <div id="mega-bloco-principal">
        //     <div>
        //         <div id="mega-bloco-loteria">

        //         </div>
        //     </div>
        // </div>
    )
}
export default Lotofacil;
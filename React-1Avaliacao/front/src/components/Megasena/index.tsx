import { useContexto } from "../../hooks";
import "./index.css"

function Megasena() {
    const { megasena } = useContexto();

    return (
        <div className="container-mega">
            {JSON.stringify(megasena)}
        </div>
        // <div id="mega-bloco-principal">
        //     <div>
        //         <div id="mega-bloco-loteria">

        //         </div>
        //     </div>
        // </div>
    )
}
export default Megasena;
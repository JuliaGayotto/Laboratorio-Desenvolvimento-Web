import { createContext, useEffect, useState } from "react";
import { LoteriaProps, Props } from "../types";
import loteria from "../services/Loteria";
import { mega } from "../styles/theme";

const Contexto = createContext({} as LoteriaProps) 

function Provider({ children }: any) {
    const [megasena, setMegasena] = useState({} as Props);
    const [timemania, setTimemania] = useState({} as Props);
    const [quina, setQuina] = useState({} as Props);
    const [tema, setTema] = useState(mega);

    useEffect(function(){
        loteria.get().then((data) => {
            setMegasena(data.megasena);
            setTimemania(data.timemania);
            setQuina(data.quina);
            }
        )
    },[])
  
    return (
        <Contexto.Provider value={{ megasena, timemania, quina, tema, setTema}}>
            {children}
        </Contexto.Provider>
    );
}

export { Contexto, Provider}
import { createContext, useEffect, useState } from "react";
import { LoteriaProps, Props } from "../types";
import loteria from "../services/Loteria";

const Contexto = createContext({} as LoteriaProps) 

function Provider({ children }: any) {
    const [megasena, setMegasena] = useState({} as Props);
    const [lotofacil, setLotofacil] = useState({} as Props);

    useEffect(function(){
        loteria.get().then((data) => {
            setMegasena(data.megasena);
            setLotofacil(data.lotofacil);
            }
        )
    },[])
  
    return (
        <Contexto.Provider value={{ megasena, lotofacil }}>
            {children}
        </Contexto.Provider>
    );
}

export { Contexto, Provider}
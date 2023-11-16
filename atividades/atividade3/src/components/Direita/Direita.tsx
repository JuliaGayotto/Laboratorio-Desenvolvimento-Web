import React, { FC } from 'react';
import styled from 'styled-components';
import NomeLoteria from '../NomeLoteria/NomeLoteria';
import EstimativaComponent from '../Estimativa/Estimativa';
import ResultadoComponent from '../Resultado/Resultado';
import AcumulouComponent from '../Acumolou/Acumulou';
import Data from '../Data/Data';

interface DireitaComponentProps {
    loteria: {
        quantidadeGanhadores: number;
        dezenas: String[];
        numeroDoConcurso: number;
        dataPorExtenso: string;  
    };
}

const DireitaComponent: FC<DireitaComponentProps> = ({ loteria}) => (
    <Direita>
        <ResultadoComponent loteria={loteria}/>
        <AcumulouComponent loteria={loteria}/>
        <Data loteria={loteria} />            
    </Direita>
);
  
const Direita = styled.div`
    margin-left: 50px;
`;

export default DireitaComponent;
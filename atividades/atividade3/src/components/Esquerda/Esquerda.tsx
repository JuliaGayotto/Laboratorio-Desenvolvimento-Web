import React, { FC } from 'react';
import styled from 'styled-components';
import NomeLoteria from '../NomeLoteria/NomeLoteria';
import EstimativaComponent from '../Estimativa/Estimativa';

interface EsquerdaComponentProps {
    logoSrc: string;
    nomeTexto: string;
    loteria: {
        dataProximoConcurso: string;
        valorEstimadoProximoConcurso: string;
    };
}

const EsquerdaComponent: FC<EsquerdaComponentProps> = ({ logoSrc, nomeTexto, loteria}) => (
    <Esquerda>
        <NomeLoteria logoSrc={logoSrc} nomeTexto={nomeTexto}/>
        <EstimativaComponent loteria={loteria} />
                    
    </Esquerda>
);
  
const Esquerda = styled.div`
`;

export default EsquerdaComponent;
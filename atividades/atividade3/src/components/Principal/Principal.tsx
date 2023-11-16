import React, { FC } from 'react';
import styled from 'styled-components';
import EsquerdaComponent from '../Esquerda/Esquerda';
import DireitaComponent from '../Direita/Direita';

interface PrincipalComponentProps {
    logoSrc: string,
    nomeTexto: string,
    loteria: {
        dataProximoConcurso: string;
        valorEstimadoProximoConcurso: string;
        quantidadeGanhadores: number;
        dezenas: String[];
        numeroDoConcurso: number;
        dataPorExtenso: string;  
    }
}

const PrincipalComponent: FC<PrincipalComponentProps> = ({ logoSrc, nomeTexto, loteria}) => (
    <Principal>
        <EsquerdaComponent logoSrc={logoSrc} nomeTexto={nomeTexto} loteria={loteria}/>
        <DireitaComponent loteria={loteria}/>
    </Principal>
);
  
const Principal = styled.div`
    display: flex;
    padding: 30px 0px;
    border-bottom: 1px solid #ddd;
    font-family: Roboto;
`;

export default PrincipalComponent;
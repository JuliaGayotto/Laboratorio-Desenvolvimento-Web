import React, { FC } from 'react';
import styled from 'styled-components';
import Megasena from '../../pages/Megasena';

interface EstimativaComponentProps {
    loteria: {
        dataProximoConcurso: string;
        valorEstimadoProximoConcurso: string;
    };
}

const EstimativaComponent: FC<EstimativaComponentProps> = ({ loteria }) => (
    <Estimativa>
        <TextoEstimativa>
            Estimativa de prêmio do próximo concurso. Sorteio em {loteria.dataProximoConcurso}:
        </TextoEstimativa>
        <EstimativaEstilo>
            R$ {((parseFloat(loteria.valorEstimadoProximoConcurso)
                .toFixed(2).replace(".",",").replace(/\B(?=(\d{3})+(?!\d))/g, '.'))).toString()}
        </EstimativaEstilo>
    </Estimativa>
);
 
const Estimativa = styled.div`
    width: 15rem;
    margin-left: 45px;
    margin-top: 20px;
`;

const TextoEstimativa = styled.div`
    font-size: 0.9rem;
    color: #4c556c;   
`;

const EstimativaEstilo = styled.div`
    font-size: 1.2rem;
    font-weight: 600;
    margin-top: 15px;
    color: ${props => props.theme.estimativa};   
`;

export default EstimativaComponent;
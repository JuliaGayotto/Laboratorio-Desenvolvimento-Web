import React, { FC } from 'react';
import styled from 'styled-components';

interface AcumulouComponentProps {
    loteria: {
        quantidadeGanhadores: number;
    }
}

const AcumulouComponent: FC<AcumulouComponentProps> = ({ loteria }) => (
    <Acumulou>
        {loteria.quantidadeGanhadores === 0 ? "ACUMULOU!" : `${loteria.quantidadeGanhadores} GANHADORES`}
    </Acumulou>

);
  
const Acumulou = styled.div`
    padding-left: 10px;
    margin-top: 15px;
    font-size: 1.8rem;
    font-weight: 600;
    color: #0066b3;
`;

export default AcumulouComponent;
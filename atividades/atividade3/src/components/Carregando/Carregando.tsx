import React, { FC } from 'react';
import styled from 'styled-components';

interface CarregandoComponentProps {
}

const CarregandoComponent: FC<CarregandoComponentProps> = () => (
    <Carregando>
        <h3><strong>Carregando...</strong></h3>
    </Carregando>

);
  
const Carregando = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 85vh ;
`;

export default CarregandoComponent;
import React, { FC } from 'react';
import styled from 'styled-components';

interface ResultadoComponentProps {
    loteria: {
        dezenas: String[];
    }, 
}

const ResultadoComponent: FC<ResultadoComponentProps> = ({ loteria }) => (
    <Resultado>
      {loteria.dezenas.map((item) => (
            <Bola>
                {item}
            </Bola>
        ))}
    </Resultado>

);
  
const Resultado = styled.div`
    display: flex;
`;


const Bola = styled.div`
    font-size: 1.1rem;
    font-weight: 600;
    margin: 0px 10px;
    padding: 10px;
    border-radius: 1.2rem;
    color:${props => props.theme.bolafonte};
    background-color: ${props => props.theme.bola};
`;


export default ResultadoComponent;
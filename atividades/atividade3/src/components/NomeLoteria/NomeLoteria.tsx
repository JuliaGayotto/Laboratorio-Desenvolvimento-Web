import React, { FC } from 'react';
import styled from 'styled-components';

interface NomeLoteriaProps {
    logoSrc: string;
    nomeTexto: string;
}

const NomeLoteria: FC<NomeLoteriaProps> = ({ logoSrc, nomeTexto }) => (
    <LogoTitulo>
      <img src={logoSrc} alt="" />
      <NomeLoteriaEstilo>{nomeTexto}</NomeLoteriaEstilo>
    </LogoTitulo>
);
  
const LogoTitulo = styled.div`
    display: flex;
`;

const NomeLoteriaEstilo = styled.div`
    font-size: 1.8rem;
    font-weight: 600;
    margin-left: 10px;
    color: ${props => props.theme.loteria};
`;


export default NomeLoteria;
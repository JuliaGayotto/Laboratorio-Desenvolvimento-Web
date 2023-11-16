export interface LoteriaProps {
    timemania: Props;
    megasena: Props;
    quina: Props;
    tema: TemaProps;
    setTema: (value: TemaProps) => void;
}

export interface Props{
    acumulado: boolean;
    concursoEspecial: boolean;
    dataApuracao: string;
    dataPorExtenso: string;
    dataProximoConcurso: string;
    dezenas: String[];
    numeroDoConcurso: number;
    quantidadeGanhadores: number;
    tipoPublicacao: number;
    tipoJogo: string;
    valorEstimadoProximoConcurso: string;
    valorPremio: number
}

export interface TemaProps{
    acumulou: string;
    data: string;
    estimativa: string;
    loteria: string;
    bola: string;
    bolafonte: string;
}
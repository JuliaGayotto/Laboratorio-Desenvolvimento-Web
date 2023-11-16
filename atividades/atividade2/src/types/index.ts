export interface LoteriaProps {
    lotofacil: Props;
    megasena: Props;
    quina: Props;
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
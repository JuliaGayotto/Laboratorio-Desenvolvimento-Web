import formatar from "./exercicio1";   

const nomes = ["Ana","Pedro","Lucas","Maria"]; 
nomes.forEach(
    (item, indice) => console.log(formatar(nomes[indice])) 
);
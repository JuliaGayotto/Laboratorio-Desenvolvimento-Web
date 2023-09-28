function item(entrada:string):string {     
    return `\t<li>${entrada}</li>\n`; 
}  

export function listar(elementos:string[]):string {     
    let soma = "";
    soma = elementos.reduce( (soma: string, elemento: string) => soma + item(elemento), "")     
    return `<ul>\n${soma}</ul>\n`; 
}  
const frutas = ["Manga","Laranja","Maça","Uva"]; 
const resultado = listar(frutas); 
console.log(resultado); 


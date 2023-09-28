import axios from "axios";  

const cep = "12243750"; 
const url = `https://viacep.com.br/ws/${cep}/json`;  
axios.get(url) 
.then( res => console.log(res.data) ) 
.catch( e => console.log(e.message )); 
 
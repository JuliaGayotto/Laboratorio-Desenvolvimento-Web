import React from "react";
import Lotofacil from "../pages/Lotofacil";
import Quina from "../pages/Quina";
import Megasena from "../pages/Megasena";
import { Route, Routes } from "react-router-dom";

export default function Rotas() {
  return (
    <Routes>
      <Route path="/megasena" element={ <Megasena/> } />
      <Route path="/lotofacil" element={ <Lotofacil/> } /> 
      <Route path="/quina" element={ <Quina/> } />    
    </Routes>
  );
}

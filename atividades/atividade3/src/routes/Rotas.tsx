import React from "react";
import Quina from "../pages/Quina";
import Megasena from "../pages/Megasena";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Timemania from "../pages/Timemania";
import Menu from "../components/Menu";
import { ThemeProvider } from "styled-components";
import { useContexto } from "../hooks";

export default function Rotas() {
  const { tema } = useContexto()
  return (
    <ThemeProvider theme={tema}>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="*" element={<Megasena />} />
          <Route path="/megasena" element={<Megasena />} />
          <Route path="/timemania" element={<Timemania />} />
          <Route path="/quina" element={<Quina />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>

  );
}

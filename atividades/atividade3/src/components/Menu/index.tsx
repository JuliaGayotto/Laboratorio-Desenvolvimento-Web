import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";
import { useContexto } from "../../hooks";
import { mega, quina, timemania } from "../../styles/theme";

interface MenuProps {}

export default function Menu({}: MenuProps) {
  const [activeLink, setActiveLink] = useState<string | null>(null);
  const { setTema } = useContexto()
  const handleLinkClick = (linkId: string) => {
    setActiveLink(linkId);
  };

  return (
    <div id="menu">
      <Link
        id="time"
        to="timemania"
        style={{
          color: activeLink === "time" ? "#aaa" : "#260085",
          pointerEvents: activeLink === "time" ? "none" : "auto",
        }}
        onClick={() => {
          handleLinkClick("time");
          setTema(timemania)
        }}
      >
        <strong>Timemania</strong>
      </Link>

      <Link
        id="mega"
        to="megasena"
        style={{
          color: activeLink === "mega" ? "#aaa" : "#209869",
          pointerEvents: activeLink === "mega" ? "none" : "auto",
        }}
        onClick={() => {
          handleLinkClick("mega");
          setTema(mega)
        }}
      >
        <strong>Megasena</strong>
      </Link>

      <Link
        id="quina"
        to="quina"
        style={{
          color: activeLink === "quina" ? "#aaa" : "#260085",
          pointerEvents: activeLink === "quina" ? "none" : "auto",
        }}
        onClick={() => {
          handleLinkClick("quina");
          setTema(quina)
        }}
      >
        <strong>Quina</strong>
      </Link>
    </div>
  );
}
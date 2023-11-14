import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";

interface MenuProps {}

export default function Menu({}: MenuProps) {
  const [activeLink, setActiveLink] = useState<string | null>(null);

  const handleLinkClick = (linkId: string) => {
    setActiveLink(linkId);
  };

  return (
    <div id="menu">
      <Link
        id="loto"
        to="lotofacil"
        style={{
          color: activeLink === "loto" ? "#aaa" : "#930089",
          pointerEvents: activeLink === "loto" ? "none" : "auto",
        }}
        onClick={() => handleLinkClick("loto")}
      >
        <strong>Lotofácil</strong>
      </Link>

      <Link
        id="mega"
        to="megasena"
        style={{
          color: activeLink === "mega" ? "#aaa" : "#209869",
          pointerEvents: activeLink === "mega" ? "none" : "auto",
        }}
        onClick={() => handleLinkClick("mega")}
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
        onClick={() => handleLinkClick("quina")}
      >
        <strong>Quina</strong>
      </Link>
    </div>
  );
}
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/logo.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    if (!menuOpen) setDropdownOpen(false); // Fecha o dropdown ao abrir/fechar o menu
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
    setDropdownOpen(false); // Fecha o dropdown
  };

  // Lista de tecnologias
  const tecnologias = [
    { name: "Engenharia dos 5Ps", path: "/engenharia-dos-5ps" },
    { name: "Proteção Contra Arco Elétrico", path: "/protecao-contra-arco-eletrico" },
    { name: "Shelter MT Trafo BT", path: "/shelter-mt-trafo-bt" },
    { name: "Automação e Telemetria", path: "/automacao-e-telemetria" },
    { name: "Retrofit", path: "/retrofit" },
  ];

  return (
    <header className="header">
      <div className="logo">
        <Link to="/" onClick={closeMenu}>
          <img src={logo} alt="Logo" />
        </Link>
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        <div className={`bar ${menuOpen ? "open" : ""}`}></div>
        <div className={`bar ${menuOpen ? "open" : ""}`}></div>
        <div className={`bar ${menuOpen ? "open" : ""}`}></div>
      </div>
      <nav className={`nav ${menuOpen ? "nav-mobile-open" : ""}`}>
        <Link to="/" onClick={closeMenu}>
          Home
        </Link>
        <Link to="/sobre" onClick={closeMenu}>
          Quem Somos
        </Link>
        <Link to="/momentos" onClick={closeMenu}>
          Momentos de Sucesso
        </Link>
        <div className="dropdown">
          <span className="dropdown-toggle" onClick={toggleDropdown}>
            Soluções <span className={`arrow ${dropdownOpen ? "open" : ""}`}>&#9660;</span>
          </span>
          <div className={`dropdown-menu ${dropdownOpen ? "show" : ""}`}>
            {tecnologias.map((tec, index) => (
              <Link to={tec.path} key={index} onClick={closeMenu}>
                {tec.name}
              </Link>
            ))}
          </div>
        </div>
        <Link to="/contato" onClick={closeMenu}>
          Contato
        </Link>
      </nav>
    </header>
  );
};

export default Header;

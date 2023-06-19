import React from "react";
import { Link } from "react-router-dom";
import "./Home.scss";
import { ShowOnLogin, ShowOnLogout } from "../../components/protect/HiddenLink";

import stockwiseLogo from "../../assets/stockwise-1.png";
import stockImage from "../../assets/stockImage.png";

const Home = () => {
  return (
    <div className="home">
      <nav className="container --flex-between ">
        <div className="logo">
          <img
            src={stockwiseLogo}
            alt="Stockwise Logo"
            style={{ width: "150px" }}
          />
        </div>

        <ul className="home-links">
          <ShowOnLogout>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </ShowOnLogout>
          <ShowOnLogout>
            <li>
              <button className="--btn --btn-primary">
                <Link to="/login" style={{ color: "white" }}>
                  Login
                </Link>
              </button>
            </li>
          </ShowOnLogout>
          <ShowOnLogin>
            <li>
              <button className="--btn --btn-primary">
                <Link to="/dashboard" style={{ color: "white" }}>
                  Dashboard
                </Link>
              </button>
            </li>
          </ShowOnLogin>
        </ul>
      </nav>

      <section className="container flex">
        <div className="text">
          <h2 style={{ color: "black" }}>
            Solução de Gerenciamento de Inventário e Estoque
          </h2>
          <p style={{ color: "black", fontSize: "2.5rem" }}>
            Sistema de inventário para controlar e gerenciar produtos no
            depósito em tempo real e integrado, tornando mais fácil desenvolver
            o seu negócio.
          </p>
        </div>
        <div className="image">
          <img src={stockImage} alt="Inventory" />
        </div>
      </section>
    </div>
  );
};
export default Home;

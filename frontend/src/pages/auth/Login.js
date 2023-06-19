import React, { useState } from "react";
import styles from "./auth.module.scss";
import Card from "../../components/card/Card";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { loginUser, validateEmail } from "../../services/authService";
import { SET_LOGIN, SET_NAME } from "../../redux/features/auth/authSlice";
import Loader from "../../components/loader/Loader";

import stockwiseLogo from "../../assets/stockwise-1.png";

const initialState = {
  email: "",
  password: "",
};

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setformData] = useState(initialState);
  const { email, password } = formData;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setformData({ ...formData, [name]: value });
  };

  const login = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      return toast.error("Preencha todos os campos");
    }

    if (!validateEmail(email)) {
      return toast.error("Entre um e-mail válido");
    }

    const userData = {
      email,
      password,
    };
    setIsLoading(true);
    try {
      const data = await loginUser(userData);
      console.log(data);
      await dispatch(SET_LOGIN(true));
      await dispatch(SET_NAME(data.name));
      navigate("/dashboard");
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  return (
    <div className={`container ${styles.auth}`}>
      {isLoading && <Loader />}
      <Card sx={{ bg: "red" }}>
        <div className={styles.form}>
          <div className="--flex-center">
            <img
              src={stockwiseLogo}
              alt="Stockwise Logo"
              style={{ width: "200px" }}
            />
          </div>

          <form onSubmit={login}>
            <input
              type="email"
              placeholder="E-mail"
              required
              name="email"
              value={email}
              onChange={handleInputChange}
            />
            <input
              type="password"
              placeholder="Senha"
              required
              name="password"
              value={password}
              onChange={handleInputChange}
            />
            <button type="submit" className="--btn --btn-primary --btn-block">
              Login
            </button>
          </form>
          <span className={styles.textForm}>
            <Link to="/forgot">Esqueci a minha senha</Link>
          </span>

          <span className={styles.register}>
            <p> Não possui uma conta? &nbsp;</p>
            <Link to="/register">Registrar</Link>
          </span>
          <span className={styles.textForm}>
            <Link to="/">Início</Link>
          </span>
        </div>
      </Card>
    </div>
  );
};

export default Login;

/* eslint-disable jsx-a11y/label-has-associated-control */
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { CgLogIn } from "react-icons/cg";
import { toast } from "react-toastify";
import Lottie from "react-lottie";
import { useAuth } from "../hooks/auth";

import { LoginMain, Background } from "../styles/login";

import loadingJson from "../assets/loading.json";

/**
 * Login Page
 * @return {JSX.Element}
 */

export default function Login(): JSX.Element {
  const { signIn } = useAuth();
  const [user, setUser] = useState("");
  const [password, setPass] = useState("");
  const [isFetching, setIsFetching] = useState(false);
  const [remember, setRemember] = useState(true);

  async function handleLogin() {
    const emailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!password && !user) {
      toast.error("Preencha suas informações antes de prosseguir.");
      return;
    }

    if (!password) {
      toast.error("Favor preencher sua senha.");
      return;
    }

    if (!user) {
      toast.error("Favor preencher seu email.");
      return;
    }

    if (!emailRegex.test(user)) {
      toast.error("Favor inserir um endereço de email válido.");
      return;
    }

    setIsFetching(true);

    try {
      await signIn(user, password, remember);
    } catch {
      toast.error("Erro ao realizar login.");
    }

    setIsFetching(false);
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        width: "100vw",
        height: "100vh",
        position: "relative",
      }}
    >
      <Head>
        <title>Login | SugarPix</title>
      </Head>
      <LoginMain>
        <h1>
          entrar no{" "}
          <span>
            sugar<b>pix</b>
          </span>
        </h1>
        <form className="login-container">
          <label htmlFor="email">email</label>
          <div className="input-wrapper">
            <img src="/static/images/mail.svg" alt="Envelope, email" />
            <input
              name="email"
              type="text"
              placeholder="nome@exemplo.com"
              value={user}
              onChange={({ target }) => setUser(target.value)}
            />
          </div>
          <label htmlFor="password">senha</label>
          <div className="input-wrapper">
            <img src="/static/images/lock.svg" alt="Cadeado" />
            <input
              name="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={({ target }) => setPass(target.value)}
            />
          </div>
          <div className="opts-container">
            <div>
              <input
                type="checkbox"
                id="remember"
                defaultChecked
                onChange={({ target }) => setRemember(target.checked)}
              />
              <label htmlFor="remember">lembrar de mim</label>
            </div>
            <a href="/login">esqueceu sua senha?</a>
          </div>
          <button
            type="submit"
            className="submit"
            disabled={isFetching}
            onClick={(e) => {
              if (isFetching) return;

              e.preventDefault();
              handleLogin();
            }}
            style={
              isFetching
                ? {
                    transform: "none",
                    cursor: "not-allowed",
                  }
                : {}
            }
          >
            {isFetching ? (
              <Lottie
                options={{
                  loop: true,
                  autoplay: true,
                  animationData: loadingJson,
                  rendererSettings: {
                    preserveAspectRatio: "xMidYMid slice",
                  },
                }}
                width={20}
                height={20}
                style={{ cursor: "auto" }}
              />
            ) : (
              <>
                <CgLogIn size={20} /> entrar
              </>
            )}
          </button>
        </form>

        <div className="signup">
          <p>ainda não tem uma conta?</p>
          <Link href="/signup">crie seu BabyPix</Link>
        </div>

        <div className="no-login">
          <p>ou</p>
          <a href="home">continue sem login</a>
        </div>
      </LoginMain>
      <Background src="/static/images/login.png" alt="Usuária de BabyPix" />
    </div>
  );
}

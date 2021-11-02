import React from "react";
import { AppProps } from "next/app";

import { Header } from "../components/Header";

import GlobalStyle from "../styles/global";
import "bootstrap/dist/css/bootstrap.min.css";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <GlobalStyle />
      <img
        src="/static/images/logo_chave.png"
        className="bg-key"
        alt="Chave logo do sugarpix"
      />
    </>
  );
};

export default MyApp;

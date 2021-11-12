import React from "react";
import { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";

import { AuthProvider } from "../hooks/auth";

import GlobalStyle from "../styles/global";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <AuthProvider>
      <Component {...pageProps} />
      <GlobalStyle />
      <ToastContainer
        position="bottom-center"
        closeButton={false}
        autoClose={3500}
      />
    </AuthProvider>
  );
};

export default MyApp;

import React from "react";
import Head from "next/head";
import Lottie from "react-lottie";
// import { toast } from "react-toastify";

import { LoadingContainer, Page } from "../styles/global";
import { Card } from "../components/Card";
import { Header } from "../components/Header";

import { api } from "../services/api";

import { Main } from "../styles/home";

import loadingJson from "../assets/loading.json";

/**
 * Home Page
 * @return {JSX.Element}
 */

export default function Home(): JSX.Element {
  const [cards, setCards] = React.useState([]);
  const [isLoading, setLoading] = React.useState(true);

  React.useEffect(() => {
    async function getUsers() {
      try {
        const { data } = await api.get("user");

        setCards(data);
        setLoading(false);
      } catch {
        // toast.error("Houve algum erro na busca pelas babies :/");
        setCards([]);
        setLoading(false);
      }
    }

    getUsers();
  }, []);

  return (
    <Page>
      <Head>
        <title>Home | SugarPix</title>
      </Head>
      <Header />
      <Main>
        {!isLoading ? (
          <>
            {cards?.length ? (
              <>
                {cards.map((card) => {
                  return <Card {...card} key={card.id} />;
                })}
              </>
            ) : (
              <p>Não encontramos nenhuma baby cadastrada.</p>
            )}
          </>
        ) : (
          <LoadingContainer>
            <Lottie
              options={{
                loop: true,
                autoplay: true,
                animationData: loadingJson,
                rendererSettings: {
                  preserveAspectRatio: "xMidYMid slice",
                },
              }}
              width={175}
              height={175}
              style={{ cursor: "auto" }}
            />
          </LoadingContainer>
        )}
      </Main>
    </Page>
  );
}

import React from "react";
import Head from "next/head";
import Lottie from "react-lottie";

import { LoadingContainer, Page } from "../styles/global";
import { Card } from "../components/Card";
import { api } from "../services/api";

import loadingJson from "../assets/loading.json";

/**
 * Home Page
 * @return {JSX.Element}
 */

export default function Home(): JSX.Element {
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    async function getUsers() {
      const { data } = await api.get("user");

      setCards(data);
    }

    getUsers();
  }, []);

  return (
    <Page>
      <Head>
        <title>Home | SugarPix</title>
      </Head>
      <main>
        {cards?.length ? (
          <>
            {cards.map((card) => {
              return <Card {...card} key={card.id} />;
            })}
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
      </main>
    </Page>
  );
}

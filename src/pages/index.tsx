import { useMemo } from "react";
import Head from "next/head";

import { Page } from "../styles/global";
import { Card } from "../components/Card";

/**
 * Home Page
 * @return {JSX.Element}
 */

export default function Home(): JSX.Element {
  const cards = useMemo(() => {
    return [
      {
        id: 1,
        name: "Arthur Sena",
        pix: "f5a46090-4716-4d58-9b24-2f1c68eab4d6",
      },
    ];
  }, []);

  return (
    <Page>
      <Head>
        <title>Home | SugarPix</title>
      </Head>
      <main>
        {cards.map((card) => {
          return <Card {...card} key={card.id} />;
        })}
      </main>
    </Page>
  );
}

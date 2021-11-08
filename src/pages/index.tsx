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
        insta: "senaarth",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        pix: "f5a46090-4716-4d58-9b24-2f1c68eab4d6",
        picture: "https://avatars.githubusercontent.com/u/49957403?v=4",
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

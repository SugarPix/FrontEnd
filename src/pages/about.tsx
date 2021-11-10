import Head from "next/head";

import { Page } from "../styles/global";
import { AboutMain } from "../styles/about";

import { Card } from "../components/Card";

/**
 * About Page
 * @return {JSX.Element}
 */

export default function About(): JSX.Element {
  return (
    <Page>
      <Head>
        <title>Sobre | SugarPix</title>
      </Head>
      <AboutMain>
        <h1>
          Sobre o sugar<b style={{ fontWeight: 600 }}>pix</b>
        </h1>
        <b>Babies,</b>
        <p>
          Já pensaram que <b>sugar</b> seria uma plataforma que te permitisse
          deixar seu <b>pix</b> à mostra para que qualquer daddy que entrasse e
          se interessasse pudesse te mimar? Basta ir pra nossa página de
          cadastro e criar seu BabyPix!
        </p>
        <b>E você Daddy,</b>
        <p>
          Já quis visualizar uma lista com candidatas a babies? A gente te
          oferece exatamente isso, um feed com diversos cards com diversas
          babies e seus <b>pix</b> pra que você possa enviar aquele mimo
          açucarado, só ir pra nossa página inicial e escolher!
        </p>
        <b>E o BabyPix, hein?</b>
        <p>
          Um card simples com uma foto, nome e a chave pix. Caso o interesse
          seja maior basta clicar em detalhes para receber uma descrição ou
          clicar no @, que leva diretamente pro insta da baby.
        </p>
      </AboutMain>
      <Card
        name="sugarpix"
        instagram="sug4rpix"
        pix="sug4rpix@gmail.com"
        image="https://sug4rpix.s3.us-east-2.amazonaws.com/nome.jpeg"
        description="Somos uma equipe independente de dois desenvolvedores e um designer. Amigos que no seu tempo livre gostam de colocar em prática seus estudos e ideias."
        style={{ marginTop: "2rem" }}
        isOpen
      />
    </Page>
  );
}

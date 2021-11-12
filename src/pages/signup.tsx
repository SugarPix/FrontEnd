import { useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { toast } from "react-toastify";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { IoMdCloseCircle } from "react-icons/io";
import { FaUpload } from "react-icons/fa";
import { MdCheckCircle } from "react-icons/md";
import { useS3Upload } from "next-s3-upload";

import { Header } from "../components/Header";
import { Page } from "../styles/global";
import { Form, SignupMain } from "../styles/signup";

import { api } from "../services/api";

/**
 * Signup Page
 * @return {JSX.Element}
 */

export default function Signup(): JSX.Element {
  const router = useRouter();
  const [name, setName] = useState("");
  const [insta, setInsta] = useState("");
  const [pix, setPix] = useState("");
  const [bio, setBio] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirm] = useState("");
  const [file, setFile] = useState(null);
  const [passFocus, setPassFocus] = useState(false);
  const [picUrl, setUrl] = useState(null);
  const { uploadToS3 } = useS3Upload();

  async function handleSubmit() {
    const id = toast.loading("Criando BabyPix . . .");

    if (file) {
      try {
        const { url } = await uploadToS3(file);

        setUrl(url);
      } catch (err) {
        toast.update(id, {
          render: "Erro: houve algum problema com a sua foto.",
          type: "error",
          isLoading: false,
          autoClose: 3500,
        });
        return;
      }
    }

    try {
      await api.post("/user/signup", {
        name,
        email,
        pix,
        password,
        description: bio,
        image: picUrl,
        instagram: insta,
      });

      toast.update(id, {
        render: "BabyPix criado com sucesso! 🍬",
        type: "success",
        isLoading: false,
        autoClose: 3500,
      });

      setTimeout(() => router.push("/login"), 3500);
    } catch (err) {
      toast.update(id, {
        render: "Erro na criação do seu BabyPix.",
        type: "error",
        isLoading: false,
        autoClose: 3500,
      });
    }
  }

  async function handleValidate() {
    const emailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!name || !email || !password || !confirmPass || !pix) {
      toast.error("Favor preencher todos os campos obrigatórios!");
      return;
    }

    if (!emailRegex.test(email)) {
      toast.error("Favor inserir um endereço de email válido.");
      return;
    }

    handleSubmit();
  }

  return (
    <Page>
      <Head>
        <title>Cadastro | SugarPix</title>
      </Head>
      <Header />
      <SignupMain>
        <h1>
          Crie o seu <b>BabyPix</b>
        </h1>
        <Form>
          <div>
            <input
              type="text"
              placeholder="Nome *"
              value={name}
              onChange={({ target }) => setName(target.value)}
            />
            <input
              type="text"
              placeholder="Insta"
              value={insta}
              onChange={({ target }) => setInsta(target.value)}
            />
          </div>

          <input
            type="text"
            placeholder="Email *"
            value={email}
            onChange={({ target }) => setEmail(target.value)}
          />
          <div>
            <input
              type="password"
              placeholder="Senha *"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            />
            <OverlayTrigger
              placement="top"
              delay={{ show: 250, hide: 400 }}
              show={
                !passFocus && password !== confirmPass && confirmPass !== ""
              }
              overlay={(props) => (
                <Tooltip id="tooltip" {...props}>
                  <IoMdCloseCircle id="not-match" size={15} /> Senhas não
                  coincidem
                </Tooltip>
              )}
            >
              <input
                type="password"
                placeholder="Confirmar Senha *"
                value={confirmPass}
                onChange={({ target }) => setConfirm(target.value)}
                onFocus={() => setPassFocus(true)}
                onBlur={() => setPassFocus(false)}
              />
            </OverlayTrigger>
          </div>
          <input
            type="text"
            placeholder="Chave Pix *"
            value={pix}
            onChange={({ target }) => setPix(target.value)}
          />
          <textarea
            placeholder="Bio"
            rows={4}
            value={bio}
            onChange={({ target }) => setBio(target.value)}
          />
          <label htmlFor="profile_pic">
            {file ? (
              <div id="chosen">
                <MdCheckCircle size={20} />
                Substituir Foto Escolhida
              </div>
            ) : (
              <div id="not-chosen">
                <FaUpload size={20} />
                Escolha uma Foto
              </div>
            )}
          </label>
          <input
            id="profile_pic"
            name="profile_pic"
            type="file"
            onChange={({ target }) => {
              if (target?.files[0]?.type?.split("/")[0] !== "image") {
                toast.error("Tipo de arquivo não permitido");
                return;
              }

              if (file) {
                toast.success("Foto substituida com sucesso!");
              }

              setFile(target.files[0]);
            }}
          />
          <button type="button" onClick={handleValidate}>
            Cadastrar
          </button>
        </Form>
      </SignupMain>
    </Page>
  );
}

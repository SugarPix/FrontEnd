import { useState } from "react";
import { toast } from "react-toastify";

import { MdContentCopy } from "react-icons/md";
import { IoLogoInstagram } from "react-icons/io";

import { Container } from "./styles";

interface CardProps {
  picture?: string;
  name: string;
  insta?: string;
  description?: string;
  pix: string;
  style?: Object;
  isOpen?: boolean;
}

export function Card({
  name,
  insta,
  description,
  pix,
  picture = "https://sug4rpix.s3.us-east-2.amazonaws.com/barbie.jpeg",
  style = {},
  isOpen = false,
}: CardProps) {
  const [showBio, setShowBio] = useState(isOpen);

  return (
    <Container
      style={{ paddingBottom: showBio ? "2.5rem" : "0.75rem", ...style }}
    >
      <div className="pix-header">
        <img src={picture} alt={name} />
        <div>
          <h3>{name}</h3>
          <p
            onClick={() => {
              try {
                navigator.clipboard.writeText(pix);
                toast.success(
                  "Chave pix copiada para a área de transferência. ✨"
                );
              } catch {
                toast.error("Não foi possível copiar chave pix.");
              }
            }}
            style={{ cursor: "pointer" }}
          >
            <MdContentCopy
              color="black"
              style={{ marginTop: "-3px" }}
              size={15}
            />{" "}
            {pix}
          </p>
          {insta && (
            <a
              href={`https://instagram.com/${insta}`}
              target="_blank"
              rel="noreferrer"
            >
              <IoLogoInstagram color="#7d1ba6" id="insta" size={20} /> @{insta}
            </a>
          )}
          {description && (
            <button type="button" onClick={() => setShowBio(!showBio)}>
              {showBio ? "Ver Menos" : "Ver Mais"}
            </button>
          )}
        </div>
      </div>
      <p className="bio" style={{ fontSize: showBio ? "0.75rem" : 0 }}>
        {description}
      </p>
    </Container>
  );
}
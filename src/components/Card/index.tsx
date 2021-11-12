import { useState } from "react";
import { toast } from "react-toastify";

import { MdContentCopy } from "react-icons/md";
import { IoLogoInstagram } from "react-icons/io";

import { Container } from "./styles";

interface CardProps {
  image?: string;
  name: string;
  instagram?: string;
  description?: string;
  pix: string;
  style?: Object;
  isOpen?: boolean;
}

export function Card({
  name,
  instagram,
  description,
  pix,
  image,
  style = {},
  isOpen = false,
}: CardProps) {
  const [showBio, setShowBio] = useState(isOpen);

  return (
    <Container
      style={{ paddingBottom: showBio ? "2.5rem" : "0.75rem", ...style }}
    >
      <div className="pix-header">
        <img
          src={
            !image || image === "" ? "/static/images/placeholder.jpeg" : image
          }
          alt={name}
        />
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
          {instagram && (
            <a
              href={`https://instagram.com/${instagram}`}
              target="_blank"
              rel="noreferrer"
            >
              <IoLogoInstagram color="#7d1ba6" id="insta" size={20} /> @
              {instagram}
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

import React, { useState } from "react";
import VisualizacaoArtigo from "./VisualizacaoArtigo";

const FormularioArtigo = () => {
  const [artigo, setArtigo] = useState({
    titulo: "",
    autor: "",
    conteudo: "",
  });

  const lidarMudanca = (evento) => {
    const { name, value } = evento.target;
    setArtigo({
      ...artigo,
      [name]: value,
    });
  };

  return (
    <div>
      <h2>Poste um artigo</h2>
      <input
        type="text"
        name="titulo"
        placeholder="Título"
        value={artigo.titulo}
        onChange={lidarMudanca}
      />
      <input
        type="text"
        name="autor"
        placeholder="Autor"
        value={artigo.autor}
        onChange={lidarMudanca}
      />
      <textarea
        name="conteudo"
        placeholder="Conteúdo"
        value={artigo.conteudo}
        onChange={lidarMudanca}
      />

      <VisualizacaoArtigo artigo={artigo} />
    </div>
  );
};

export default FormularioArtigo;

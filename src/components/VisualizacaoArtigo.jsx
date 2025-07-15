import React from "react";

const VisualizacaoArtigo = ({ artigo }) => {
  return (
    <div
      style={{ marginTop: "2rem", padding: "1rem", border: "1px solid #ccc" }}
    >
      <h3>Pré-visualização do Artigo</h3>
      <h4>{artigo.titulo}</h4>
      <p>{artigo.autor}</p>
      <p>{artigo.conteudo}</p>
    </div>
  );
};

export default VisualizacaoArtigo;

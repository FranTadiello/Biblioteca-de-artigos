import React, { useState } from "react";

function Postagem(props) {
  const [curtidas, setCurtidas] = useState(0);

  const adicionarCurtida = () => {
    setCurtidas(curtidas + 1);
  };

  return (
    <div>
      <h2>{props.title}</h2>
      <h3>Autor: {props.autor}</h3>
      <p>{props.conteudo}</p>
      <button onClick={adicionarCurtida} style={{ marginBottom: "1rem" }}>Curtidas: {curtidas}</button>
    </div>
  );
}

export default Postagem;

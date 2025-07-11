function Postagem(props) {
  return (
    <div>
      <h2>{props.title}</h2>
      <h3>Autor: {props.autor}</h3>
      <p>{props.conteudo}</p>
      <small>Curtidas: {props.curtidas}</small>
    </div>
  );
}

export default Postagem;

import React, { useEffect, useState } from "react";
import axios from "axios";

const baseUrl = "https://jsonplaceholder.typicode.com/posts";

export function Post() {
  const [post, setPost] = useState(null);
  const [error, setError] = useState(null);


  //Buscar
  useEffect(() => {
    axios.get(`${baseUrl}/1`)
        .then(({ data }) => setPost(data))
        .catch((error) => console.error(error.message));
  }, []);

  //Criar
function handleCriarPost(){
  axios.post(baseUrl, {
    title: "Novo Post",
    body: "Conteúdo do novo post"
})
    .then(({ data }) => setPost(data))
    .catch((error) => console.error(error.message));
}

 // Atualizar
function handleAtualizarPost() {
 axios.put(`${baseUrl}/1`, {
  title: "Post Atualizado",
  body: "Novo conteúdo"
})
    .then(({ data }) => setPost(data))
    .catch((error) => console.error(error.message));
}

    //Deletar
function handleExcluirPost() {
axios.delete(`${baseUrl}/1`)
  .then(() => {
    alert("Post deletado!");
    setPost(null);
  })
  .catch((error) => console.error(error.message));
}

  if (!post) return <p>Carregando...</p>;

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>

      <button onClick={handleCriarPost}>Criar Post</button>
      <button onClick={handleAtualizarPost}>Atualizar Post</button>
      <button onClick={handleExcluirPost}>Excluir Post</button>
    </div>
  );
}


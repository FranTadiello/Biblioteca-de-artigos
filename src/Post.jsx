import React, { useEffect, useState } from "react";
import axios from "axios";

const baseUrl = "https://jsonplaceholder.typicode.com/posts";

export function Post() {
  const [post, setPost] = useState(null);
  const [error, setError] = useState(null);


  //Buscar
  useEffect(() => {
  async function buscarDados() {
      try {
        const resposta = await axios.get(`${baseUrl}/1`);
        setPost(resposta.data);
      } catch (erro) {
        setError(erro.message);
      }
    }
    buscarDados();
  }, []);


  //Criar
async function handleCriarPost(){
  try {
    const resposta = await axios.post(baseUrl, {
      title: "Novo Post",
      body: "Conteúdo do novo post"
    });
    setPost(resposta.data);
  } catch (erro) {
    setError(erro.message);
  }
}


 // Atualizar
async function handleAtualizarPost() {
 try {
   const resposta = await axios.put(`${baseUrl}/1`, {
    title: "Post Atualizado",
    body: "Novo conteúdo"
 });
 setPost(resposta.data);
  } catch (erro) {
    setError(erro.message);
  }
}



    //Deletar
async function handleExcluirPost() {
  try {
    await axios.delete(`${baseUrl}/1`);
    alert("Post deletado!");
    setPost(null);
  } catch(erro) {
    setError(erro.message);
  }
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


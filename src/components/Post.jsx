import React from "react";
import { usePost } from "../hooks/usePost";
import Postagem from "./Postagem";

export function Post() {
  const {
    post,
    error,
    carregando,
    handleCriarPost,
    handleAtualizarPost,
    handleExcluirPost,
  } = usePost();

  if (carregando) return <p>Carregando post...</p>;
  if (error) return <p style={{ color: "red" }}>Erro: {error}</p>;
  if (!post) return <p>Nenhum post disponível.</p>;

  return (
    <div>

      <Postagem title={post.title} autor="Franciele" conteudo={post.body} />

      <button onClick={handleCriarPost}>Criar Post</button>
      <button onClick={handleAtualizarPost}>Atualizar Post</button>
      <button onClick={handleExcluirPost}>Excluir Post</button>
    </div>
  );
}

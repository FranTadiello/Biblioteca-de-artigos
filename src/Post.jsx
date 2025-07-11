import React from "react";
import { usePost } from "./hooks/usePost";

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
      <h2>{post.title}</h2>
      <p>{post.body}</p>

      <button onClick={handleCriarPost}>Criar Post</button>
      <button onClick={handleAtualizarPost}>Atualizar Post</button>
      <button onClick={handleExcluirPost}>Excluir Post</button>
    </div>
  );
}

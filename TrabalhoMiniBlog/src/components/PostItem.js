import React from "react";
import { Titulo, Span, Container, Ul, Button, ImgPost, DivConteudo, DivImg } from "./styles/PostItemStyles";
import Modal from "./Modal";

const PostItemComponent = ({ posts, onDeletePost}) => {
  return (
    <div>
      {posts.length > 0 && <h2>Lista de Postagens</h2>}
      <Ul>
        {posts.map((post, index) => (
          <li key={index}>
            <Container>
              <DivImg>
                <ImgPost
                  src={post.linkImg}
                  alt="Imagem da postagem"
                  width="100%"
                />
              </DivImg>

              <DivConteudo>
                <Titulo>{post.titulo}</Titulo>
                {post.desc.length > 50 ? (
                  <Span>
                    <Span>{post.desc.substring(0, 30)}</Span>

                    <Modal descCompleta={post.desc} />
                  </Span>
                ) : (
                  <p>{post.desc}</p>
                )}
                {/* BOTÃO DE DELETAR */}
                <Button onClick={() => onDeletePost(index)}>
                  Deletar
                </Button>{" "}
              </DivConteudo>
            </Container>
          </li>
        ))}
      </Ul>
    </div>
  );
};

export default PostItemComponent;

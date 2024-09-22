import React from "react";
import { Input, InputDesc, Button } from "./styles/PostFormStyles";
import PostItemComponent from "./PostItem";

const isValidUrl = (url) => {
  const regex = /^(https?|chrome):\/\/[^\s$.?#].[^\s]*$/gm;
  return regex.test(url);
};

const ImagemPadrao = "https://th.bing.com/th/id/OIP.XVtlcluErQahZRPwB8SroQAAAA?rs=1&pid=ImgDetMain";

class PostForm extends React.Component {
  state = {
    valorTitulo: "",
    valorDesc: "",
    linkImg: "",
    posts: [], // VAI ARMAZENAR A POSTAGEM AQUI
  };

  onChangeTitulo = (event) => {
    this.setState({ valorTitulo: event.target.value });
  };

  onChangeDesc = (event) => {
    this.setState({ valorDesc: event.target.value });
  };

  onChangeLink = (event) => {
    this.setState({ linkImg: event.target.value });
  };

  //FUNÇÃO DE ADICIONAR POSTAGENS
  handleButtonClick = () => {
    //CONST PARA FACILITAR O ENTENDIMENTO
    const url = this.state.linkImg;
    const titulo = this.state.valorTitulo;
    const desc = this.state.valorDesc;
    console.log(!titulo);
    isValidUrl(url);
    //VERIFICA SE O TITULO OU A DESCRICAO ESTAO VAZIOS
    if (!titulo || titulo.trim() === "") {
      alert("Prencha o campo de Titulo!!!");
    } else if (!desc || desc.trim() === "") {
      alert("Prencha o campo de Conteudo!!!");

    //VERIFICA SE A URL  
    } else if (isValidUrl(url)) {
      const novaPostagem = {
        titulo: this.state.valorTitulo,
        desc: this.state.valorDesc,
        linkImg:
          this.state.linkImg ||
          ImagemPadrao /* SE TIVER LINK DE IMG ADICIONA ELA SENAO ADICIONA A PADRAO */,
      };

      //RESETA OS INPUTS APÓS POSTAR
      this.setState((prevState) => ({
        posts: [novaPostagem, ...prevState.posts],
        valorTitulo: "",
        valorDesc: "",
        linkImg: "",
      }));
    } else {
      alert("Link de imagem inválido!!!");
    }
  };

  //FUNÇÃO QUE DELETA A POSTAGEM
  handleDeletePost = (index) => {
    this.setState((prevState) => ({
      posts: prevState.posts.filter((_, i) => i !== index),
    }));
  };

  //FUNÇÃO QUE POSTA COM A TECLA ENTER
  handleKeyPress = (event) => {
    if (event.key === "Enter") {
      this.handleButtonClick(); // Chama a função de postagem
    }
  };

  render() {
    return (
      <div>
        <Input
          type="text"
          placeholder="Título da postagem (máximo 50 caracteres)"
          maxLength={50}
          readOnly={false}
          name={"Titulo"}
          onChange={this.onChangeTitulo}
          onKeyPress={this.handleKeyPress}
          value={this.state.valorTitulo}
        />
        <InputDesc
          type="text"
          placeholder="Digite o conteúdo..."
          readOnly={false}
          name={"valorDesc"}
          onChange={this.onChangeDesc}
          onKeyPress={this.handleKeyPress}
          value={this.state.valorDesc}
        />
        <Input
          type="text"
          placeholder="Digite o link da imagem..."
          readOnly={false}
          name={"Link"}
          onChange={this.onChangeLink}
          onKeyPress={this.handleKeyPress}
          value={this.state.linkImg}
        />

        <Button type="submit" onClick={this.handleButtonClick}>
          Postar
        </Button>

        {/* RENDERIZA A LISTA DE POSTAGENS */}
        <PostItemComponent
          posts={this.state.posts}
          onDeletePost={this.handleDeletePost}
        />
      </div>
    );
  }
}

export default PostForm;

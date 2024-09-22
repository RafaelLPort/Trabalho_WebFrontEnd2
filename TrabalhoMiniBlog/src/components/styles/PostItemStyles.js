import styled from "styled-components";

export const Titulo = styled.h2`
  margin-bottom: 8px;

  @media (max-width: 900px) {
    font-size: 13px;
  }

  @media (max-width: 768px) {
    font-size: 11px;
  }
`;

export const Span = styled.div`
  display: flex;
  margin-bottom: 5px;

  @media (max-width: 900px) {
    font-size: 13px;
  }

  @media (max-width: 768px) {
    font-size: 11px;
  }

  @media (max-width: 480px) {
    font-size: 9px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 97%;
  height: 100%;
  max-height: 600px;
  background-color: white;
  align-items: left;
  border: 3px solid black;
  border-radius: 10px;
  margin-bottom: 10px;
`;

export const Ul = styled.ul`
  list-style-type: none;
  width: 100%;
  height: auto;
  padding: 15px;
`;

export const Button = styled.button`
  margin-top: 1%;
  display: flex;
  padding: 10px 20px;
  background-color: red;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export const ImgPost = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  max-width: 600px;
  max-height: 600px;
  border-radius: 9px;
`;

export const DivConteudo = styled.div`
  width: 100%;
`;

export const DivImg = styled.div`
  margin-right: 15px;
  padding: 10px;
`;

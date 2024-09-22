import styled from "styled-components";

export const ModalS = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  background-color: white;
  width: 80%;
  max-width: 600px;
  max-height: 700px;
  border: 3px solid black;
  color: black;
  z-index: 999;
  height: auto;
`;

export const ItensModal = styled.div`
  display: flex;
  justify-content: space-between;
  width: 70%;
  margin-left: 5%;
`;

export const CloseButton = styled.button`
  border: none;
  background-color: transparent;
  color: gray;
  cursor: pointer;
  font-size: 30px;
  padding: 1px;

  &:hover {
    color: black;
  }
`;

export const DescCompleta = styled.span`
  align-items: center;
  overflow-y: auto;
  margin: 15px;
  word-wrap: break-word;
`;

export const DescButton = styled.button`
  border: none;
  background-color: transparent;
  color: #0000ee;
  text-decoration: underline;
  cursor: pointer;

  &:hover {
    color: #1e90ff;
  }
`;

export const DivModal = styled.div``;

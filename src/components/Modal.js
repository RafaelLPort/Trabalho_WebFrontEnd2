import React, { Component } from "react";
import { DescButton, ModalS, CloseButton, ItensModal, DescCompleta, DivModal } from "./styles/ModalStyles";

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  ModalOpen = () => {
    this.setState({ isOpen: true });
  };

  ModalClose = () => {
    this.setState({ isOpen: false });
  };

  render() {
    return (
      <DivModal>
        <DescButton onClick={this.ModalOpen}>Leia mais</DescButton>
        {this.state.isOpen && (
          <ModalS>
            <ItensModal>
              <CloseButton onClick={this.ModalClose}>X</CloseButton>
              <h1>Descrição Detalhada</h1>
            </ItensModal>
            <DescCompleta>{this.props.descCompleta}</DescCompleta>
          </ModalS>
        )}
      </DivModal>
    );
  }
}

export default Modal;

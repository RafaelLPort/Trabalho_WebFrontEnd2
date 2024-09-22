import React from "react";
import { Header } from "./styles/HeaderStyles";
import BannerComponent from "./Banner";

const HeaderComponent = () => {
  return (
    <div>
      <Header>MiniBlog</Header>
      <BannerComponent />
    </div>
  );
};

export default HeaderComponent;

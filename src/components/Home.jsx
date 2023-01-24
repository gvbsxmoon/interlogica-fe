import React from "react";
import styled from "styled-components";
import { text } from "colors";
import Cake from "../assets/cake.png";
import Showcase from "organisms/Showcase";

const Container = styled.div`
  padding: 12rem 8rem 4rem 8rem;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;

  @media screen and (max-width: 900px) {
    padding: 12rem 4rem 4rem 4rem;
  }

  @media screen and (min-width: 1200px) {
    padding: 12rem 16rem 4rem 16rem;
  }
`;

const CakeContainer = styled.img`
  height: 40rem;
  position: fixed;
  bottom: -60px;
  left: -300px;

  @media screen and (min-width: 900px) {
    height: 50rem;
  }
`;

const Home = () => {
  return (
    <Container className="torta">
      <CakeContainer src={Cake} alt="" />
      <Showcase />
    </Container>
  );
};

export default Home;

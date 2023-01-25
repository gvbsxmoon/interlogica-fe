import React from "react";
import styled from "styled-components";
import Showcase from "organisms/Showcase";
import Button from "atoms/Button";
import Typography from "atoms/Typo";
import { Link } from "react-router-dom";
import { detail } from "colors";

const Container = styled.div`
  padding-block: 8rem;
  height: 80vh;

  display: grid;
  place-content: center;
  gap: 3.2rem;

  @media screen and (max-width: 900px) {
    padding: 8rem 2rem 4rem 2rem;
  }

  @media screen and (min-width: 1200px) {
    padding: 12rem 16rem 4rem 16rem;
  }
`;

const Pvt = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  margin-bottom: 3.2rem;
  background-color: ${detail};
  height: 80px;
`;

const Home = () => {
  return (
    <>
      <Container className="torta">
        <Showcase />
      </Container>
      <Pvt>
        <Typography style={{color: '#fafafa'}}>Sei un operatore della pasticceria?</Typography>
        <Link to="/login">
          <Button variant="text" style={{color: '#fafafa'}}>Accedi all'area privata</Button>
        </Link>
      </Pvt>
    </>
  );
};

export default Home;

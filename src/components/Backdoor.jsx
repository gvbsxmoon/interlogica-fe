import React, { useState } from "react";
import styled from "styled-components";
import Typography from "atoms/Typo";
import Button from "atoms/Button";
import { useNavigate } from "react-router-dom";
import Actions from "molecules/Actions";

const Container = styled.div`
  height: 80vh;
  display: grid;
  place-content: center;
  padding-block: 8rem;

  @media screen and (max-width: 900px) {
    padding: 12rem 2rem 4rem 2rem;
  }

  @media screen and (min-width: 1200px) {
    padding: 12rem 16rem 4rem 16rem;
  }
`;

const Backdoor = () => {
  const username = sessionStorage.getItem("username");
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.clear();
    navigate("/");
  };

  return (
    <Container>
      <Typography variant="subhead" style={{ textAlign: "center" }}>
        Ciao {username.split(".")[0]}!
      </Typography>
      <Actions />
      <Button onClick={handleLogout}>Logout</Button>
    </Container>
  );
};

export default Backdoor;

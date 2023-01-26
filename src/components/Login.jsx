import React, { useEffect } from "react";
import styled from "styled-components";
import Button from "atoms/Button";
import { Link } from "react-router-dom";
import Typography from "atoms/Typo";
import LoginForm from "organisms/LoginForm";
import { useNavigate } from "react-router-dom";
import { detail } from "colors";

const Container = styled.div`
  padding-block: 8rem;
  height: 80vh;

  display: grid;
  place-content: center;

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
  font-size: 1.2rem;
  height: 80px;
  background-color: ${detail};
`;

const Login = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (sessionStorage.getItem("logged")) {
      navigate("/backdoor");
    }
  });

  return (
    <>
      <Container>
        <LoginForm />
      </Container>
      <Pvt>
        <Typography style={{color: 'white'}}>Sei capitato qui per sbaglio?</Typography>
        <Link to="/">
          <Button variant="text" style={{color: 'white'}}>Torna alla home</Button>
        </Link>
      </Pvt>
    </>
  );
};

export default Login;

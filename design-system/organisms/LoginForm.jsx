import React, { useState } from "react";
import Input from "atoms/Input";
import Button from "atoms/Button";
import Typography from "atoms/Typo";
import { white } from "colors";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Form = styled.form`
  background-color: ${white};
  border-radius: 1.6rem;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.6rem;
  padding: 1.2rem;
`;

const LoginForm = () => {
  const [loginForm, setLoginForm] = useState({
    username: "",
    password: "",
  });

  const [loginError, setLoginError] = useState("");

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoginError('');

    try {
      const response = (
        await axios.post("http://localhost:3000/api/login", loginForm)
      ).data;

      sessionStorage.setItem("jwtToken", response.token);
      sessionStorage.setItem("username", loginForm.username);
      sessionStorage.setItem("logged", response.logged);

      navigate('/backdoor');
    } catch (e) {
      setLoginError(e.response.data.msg);
    }

    setLoginForm({
      username: "",
      password: "",
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="username"
        name="username"
        value={loginForm.username}
        onChange={(e) =>
          setLoginForm({ ...loginForm, username: e.target.value })
        }
      />
      <Input
        type="password"
        placeholder="password"
        name="password"
        value={loginForm.password}
        onChange={(e) =>
          setLoginForm({ ...loginForm, password: e.target.value })
        }
      />
      {loginError.length != 0 && (
        <Typography variant="error">{loginError}</Typography>
      )}
      <Button
        type="submit"
        value="submit"
        style={{ width: "100%" }}
      >
        Log in
      </Button>
    </Form>
  );
};

export default LoginForm;

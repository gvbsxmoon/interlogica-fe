import React, { useState } from "react";
import styled from "styled-components";
import Input from "atoms/Input";
import Button from "atoms/Button";
import Typography from "atoms/Typo";
import { white } from "colors";
import { useNavigate } from "react-router-dom";
import axios from "axios";

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

function ProductPost() {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    quantity: "",
    token: sessionStorage.getItem("jwtToken"),
  });

  const [label, setLabel] = useState("");

  const navigate = useNavigate();

  const callPost = async (e) => {
    e.preventDefault();

    try {
      await await axios.post("http://localhost:3000/api/pastry", product);
      setProduct({
        name: "",
        price: "",
        quantity: "",
        token: sessionStorage.getItem("jwtToken"),
      });
      setLabel("Prodotto inserito");
    } catch (e) {
      console.log(e.response.data.msg);
    }
  };

  return (
    <Container>
      <Form onSubmit={callPost}>
        <Input
          type="text"
          placeholder="nome"
          name="nome"
          value={product.name}
          onChange={(e) => setProduct({ ...product, name: e.target.value })}
        />
        <Input
          type="number"
          placeholder="prezzo"
          name="prezzo"
          value={product.price}
          onChange={(e) => setProduct({ ...product, price: e.target.value })}
        />
        <Input
          type="number"
          placeholder="quantità"
          name="quantità"
          value={product.quantity}
          onChange={(e) => setProduct({ ...product, quantity: e.target.value })}
        />
        {label.length != 0 && (
          <Typography variant='caption' style={{ color: "lightgreen", textAlign: 'center' }}>{label}</Typography>
        )}
        <Button type="submit" value="submit" style={{ width: "100%" }}>
          Inserisci in vetrina
        </Button>
      </Form>

      <Button onClick={() => navigate("/backdoor")}>
        Torna all'area privata
      </Button>
    </Container>
  );
}

export default ProductPost;

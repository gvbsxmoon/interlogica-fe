import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Button from "atoms/Button";
import { useNavigate } from "react-router-dom";
import Input from "atoms/Input";
import Typography from "atoms/Typo";

const Container = styled.div`
  padding-block: 8rem;
  height: 80vh;

  display: grid;
  place-content: center;
  gap: 1.6rem;

  @media screen and (max-width: 900px) {
    padding: 8rem 2rem 4rem 2rem;
  }

  @media screen and (min-width: 1200px) {
    padding: 12rem 16rem 4rem 16rem;
  }
`;

const ProductFrame = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;
`;

function ProductDelete() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [id, setId] = useState("");
  const [info, setInfo] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await (
          await axios.get("http://localhost:3000/api/pastry")
        ).data;
        setProducts(response);
      } catch (e) {
        console.log(e);
      }
    };

    fetchProducts();
  });

  const callDelete = async () => {
    const token = sessionStorage.getItem("jwtToken");

    try {
      await axios.delete(`http://localhost:3000/api/pastry/${token}/${id}`);
      setInfo("Dolce eliminato.");
    } catch (e) {
      setInfo("Selezionare un prodotto valido.");
    }

    navigate(0);
  };

  return (
    <Container>
      <Typography variant="subhead">
        Seleziona il prodotto da cancellare
      </Typography>
      {products.map((e) => (
        <ProductFrame>
          <Input
            key={e._id}
            type="radio"
            name="products"
            value={e._id}
            onChange={(e) => setId(e.target.value)}
          />
          <Typography variant="body" htmlFor="products">
            {e.name}, disponibili ancora: {e.quantity}
          </Typography>
        </ProductFrame>
      ))}
      <Button onClick={callDelete}>Elimina prodotto</Button>
      {info.length != 0 && (
        <Typography style={{ textAlign: "center" }}>{info}</Typography>
      )}
      <Button
        onClick={() => navigate("/backdoor")}
        style={{ marginTop: "3.2rem" }}
      >
        Torna all'area privata
      </Button>
    </Container>
  );
}

export default ProductDelete;

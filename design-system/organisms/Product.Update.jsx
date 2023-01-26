import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Button from "atoms/Button";
import { useNavigate } from "react-router-dom";
import Input from "atoms/Input";
import Typography from "atoms/Typo";
import { white } from "colors";

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

function ProductUpdate() {
  const navigate = useNavigate();
  const token = sessionStorage.getItem("jwtToken");
  const [products, setProducts] = useState([]);
  const [id, setId] = useState("");
  const [info, setInfo] = useState("");

  const [productToChange, setProductToChange] = useState({
    name: "",
    price: "",
    quantity: "",
    token: token,
  });

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
  }, []);

  const callUpdate = async () => {
    try {
      await axios.put(
        `http://localhost:3000/api/pastry/${id}`,
        productToChange
      );
      setInfo("Dolce aggiornato.");
    } catch (e) {
      setInfo("Selezionare un prodotto valido.");
    }

    navigate(0)
  };

  const handleRadioSelection = async (id) => {
    setId(id);
    try {
      const response = (await axios.get(
        `http://localhost:3000/api/pastry/${id}`
      )).data;
      setProductToChange({
        ...response,
        token: token,
      });
      console.log(productToChange)
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <Container>
        <Typography variant="subhead">
          Seleziona il prodotto da modificare
        </Typography>
        {products.map((e) => (
          <ProductFrame>
            <Input
              key={e._id}
              type="radio"
              name="products"
              value={e._id}
              onChange={() => handleRadioSelection(e._id)}
            />
            <Typography variant="body" htmlFor="products">
              {e.name}, disponibili ancora: {e.quantity}
            </Typography>
          </ProductFrame>
        ))}
        {JSON.stringify(productToChange) !== "{}" && (
          <Form>
            <Input
              type="text"
              placeholder="Nuovo nome"
              name="nome"
              value={productToChange.name}
              onChange={(e) =>
                setProductToChange({
                  ...productToChange,
                  name: e.target.value,
                })
              }
            />
            <Input
              type="number"
              placeholder="Nuovo prezzo"
              name="prezzo"
              value={productToChange.price}
              onChange={(e) =>
                setProductToChange({
                  ...productToChange,
                  price: e.target.value,
                })
              }
            />
            <Input
              type="number"
              placeholder="Nuova quantità"
              name="quantità"
              value={productToChange.quantity}
              onChange={(e) =>
                setProductToChange({
                  ...productToChange,
                  quantity: e.target.value,
                })
              }
            />
          </Form>
        )}
        <Button onClick={callUpdate}>Aggiorna prodotto</Button>
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
    </>
  );
}

export default ProductUpdate;

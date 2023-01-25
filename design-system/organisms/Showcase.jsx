import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import Typography from "atoms/Typo";
import ProductCard from "molecules/ProductCard";

import testurl from "../../src/assets/cake.png";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const Products = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Showcase = () => {
  const [products, setProducts] = useState([]);

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

  return (
    <Container>
      <Typography variant="subhead">I prodotti di oggi</Typography>
      <Products>
        {products.map((e) => (
          <ProductCard
            key={e._id}
            imgUrl={testurl}
            name={e.name}
            availability={e.available}
            qt={e.quantity}
            price={e.price}
          />
        ))}
      </Products>
    </Container>
  );
};

export default Showcase;

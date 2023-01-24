import React from "react";
import styled from "styled-components";
import Typography from "atoms/Typo";
import ProductCard from "molecules/ProductCard";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  justify-content: center;
  align-items: center;
`;

const Showcase = () => {
  return (
    <Container>
      <Typography variant="subhead">I prodotti di oggi</Typography>
      <ProductCard />
    </Container>
  );
};

export default Showcase;

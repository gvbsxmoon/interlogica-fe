import React from "react";
import styled from "styled-components";
import { white } from "colors";
import Typography from "atoms/Typo";
import Button from "atoms/Button";

const Card = styled.div`
  background-color: ${white};
  width: 20rem;
  border-radius: 1.6rem;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.08);
`;

const Available = styled.div`
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 50%;
  margin: 0.4rem;
  background-color: ${(props) => (props.isAvailable ? "lightgreen" : "tomato")};
`;

const Img = styled.div`
  width: 100%;
  height: 10rem;
  background-image: ${(props) => `url(${props.url})`};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  margin-block: 1.6rem;
`;

const firstRow = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

const description = {
  display: "flex",
  flexDirection: "column",
  gap: "1.6rem",
  padding: "0.8rem",
};

const ProductCard = ({ imgUrl, name, availability, qt, price }) => {
  return (
    <Card>
      <Img url={imgUrl} alt="" />
      <div style={description}>
        <Typography style={{ textAlign: "center", width: "100%" }}>
          {name}
        </Typography>
        <div style={firstRow}>
          <Available isAvailable={availability} />
          <Typography variant="caption">
            {availability ? `Ancora ${qt} disponibili` : "Non disponibile"}
          </Typography>
          {availability && <Typography>`{price}€`</Typography>}
        </div>
        <Button variant="secondary">Scopri di più</Button>
      </div>
    </Card>
  );
};

export default ProductCard;

import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { white } from "colors";
import Typography from "atoms/Typo";
import Button from "atoms/Button";

const Card = styled.div`
  background-color: ${white};
  width: 18rem;
  border-radius: 1.6rem;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.08);
  margin: 1.2rem;
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

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Spacer = styled.div`
  width: 100%;
  height: 0.8rem;
`;

const Desc = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  padding: 0.8rem;
`;

const ProductCard = ({ imgUrl, name, availability, qt, price }) => {
  return (
    <Card>
      <Img url={imgUrl} alt="" />
      <Desc>
        <Typography variant="body" style={{ textTransorm: "capitalize" }}>
          {name}
        </Typography>
        <Row>
          <Typography variant="caption">
            {availability ? `${qt} disponibili` : "Non disponibile"}
          </Typography>
          {availability && <Typography>`{price}€`</Typography>}
        </Row>
        <Spacer />
        <Button
          style={{ width: "100%" }}
          disabled={!availability}
        >
          Scopri di più
        </Button>
      </Desc>
    </Card>
  );
};

ProductCard.propTypes = {
  imgUrl: PropTypes.any.isRequired,
  name: PropTypes.string.isRequired,
  availability: PropTypes.bool.isRequired,
  qt: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
};

export default ProductCard;

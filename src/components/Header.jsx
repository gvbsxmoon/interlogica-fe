import React from "react";
import styled from "styled-components";
import { primary } from "colors";
import Typography from "atoms/Typo";

const H = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  padding: 2rem 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${primary};
  z-index: 1000;
`;

const Logo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = () => {
  return (
    <H>
      <Logo>
        <Typography variant="logo" style={{ fontSize: "1.8rem" }}>
          pasticceria
        </Typography>
        <Typography variant="logo">luana & maria</Typography>
      </Logo>
    </H>
  );
};

export default Header;

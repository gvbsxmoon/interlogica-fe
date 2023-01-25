import { detail, secondary } from "colors";
import { book } from "fonts";
import PropTypes from "prop-types";
import styled from "styled-components";
import React from "react";

const I = styled.input`
  min-height: 3.8rem;
  background-color: transparent;
  color: ${detail};
  font-weight: ${book};
  padding: 0 2rem;
  border: 2px solid #d9d9d9;
  border-radius: 1.2rem;
  &:focus-visible {
    outline: none;
  }

  &:focus {
    border: 2px solid ${detail};
  }

  &::placeholder {
    color: #d9d9d9;
  }
`;

const Input = ({ ...rest }) => {
  return <I {...rest}></I>;
};

export default Input;

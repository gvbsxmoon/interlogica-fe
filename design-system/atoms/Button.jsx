import PropTypes from "prop-types";
import styled from "styled-components";
import { base, book } from "fonts";
import { secondary as secondaryColor, text as textColor, white, detail } from "colors";
import React from "react";

const common = {
  fontSize: base,
  fontWeight: book,
  border: "none",
  borderRadius: "12px",
  cursor: "pointer"
};

const primary = styled.button`
background: ${props => props.disabled ? secondaryColor : '#D9D9D9'};
  color: ${textColor};
  padding: 1rem;
  width: 100%;
  pointer-events: ${props => props.disabled && 'none'}
  &:hover {
    box-shadow: 0px 4px 12px ${secondaryColor}19;
  }
  ${common}
`;

const secondary = styled.button`
  background: ${props => props.disabled ? detail : '#D9D9D9'};
  color: ${white};
  padding: 1rem;
  width: 100%;
  pointer-events: ${props => props.disabled && 'none'}
  &:hover {
    box-shadow: 0px 4px 12px ${detail}19;
  }
  ${common}
`;

const text = styled.button`
  background: none;
  color: ${secondaryColor};
  padding: 0;
  margin: 0;
  ${common}
`

const Button = ({ children, variant, ...rest }) => {
  const El = Button.variants[variant] || primary;
  return (
    <El {...rest} data-variant={variant}>
      {children}
    </El>
  );
};

Button.variants = {
  primary,
  secondary,
  text,
};

Button.defaultProps = {
  variant: "primary"
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.string.isRequired
};

export default Button;

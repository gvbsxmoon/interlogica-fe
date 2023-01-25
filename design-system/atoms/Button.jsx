import PropTypes from "prop-types";
import styled from "styled-components";
import { base, book, regular } from "fonts";
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
  background: transparent;
  color: ${secondaryColor};
  padding: 1rem;
  border: 1px solid ${secondaryColor} !important;
  pointer-events: ${props => props.disabled && 'none'}
  &:hover {
    box-shadow: 0px 4px 12px ${secondaryColor}19;
  }
  ${common}
`;

const secondary = styled.button`
  background: ${props => props.disabled ? '#D9D9D9' : detail};
  color: ${white};
  padding: 1rem 2.4rem;
  pointer-events: ${props => props.disabled && 'none'}
  &:hover {
    box-shadow: 0px 4px 12px ${detail}19;
  }
  ${common}
`;

const text = styled.button`
  background: ${props => props.disabled ? '#D9D9D9' : 'none'};
  color: ${textColor};
  margin: 0;
  ${common}
`

const Button = ({ children, variant, disabled, ...rest }) => {
  const El = Button.variants[variant] || primary;
  return (
    <El {...rest} data-variant={variant} disabled={disabled}>
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
  variant: "primary",
  disabled: false
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.string.isRequired,
  disabled: PropTypes.bool
};

export default Button;

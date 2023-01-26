import PropTypes from "prop-types";
import styled from "styled-components";
import { xsmall, base, xMedium, medium, xLarge, regular, book, semibold } from "fonts";
import { text, secondary } from "colors";
import React from "react";

const Title = styled.h1`
  font-size: ${xLarge};
  font-weight: ${regular};
  color: ${text};
`;

const Logo = styled.h2`
font-family: 'Aboreto', cursive;
  font-size: ${medium};
  font-weight: ${regular};
  color: ${secondary};
`;

const Subhead = styled.h3`
  font-size: ${xMedium};
  font-weight: ${regular};
  color: ${text};
`;

const Paragraph = styled.p`
  font-size: ${base};
  font-weight: ${regular};
  color: ${text};
`;

const Body = styled.p`
  font-size: ${base};
  font-weight: ${book};
  color: ${text};
`;

const Caption = styled.p`
  font-size: ${xsmall};
  font-weight: ${regular};
  color: ${text};
`;

const Error = styled.p`
  font-size: ${xsmall};
  font-weight: ${semibold};
  text-align: center;
  color: ${secondary};
`;

const Typography = ({ children, variant, ...rest }) => {
  const El = Typography.variants[variant] || primary;
  return (
    <El {...rest} data-variant={variant}>
      {children}
    </El>
  );
};

Typography.variants = {
  title: Title,
  logo: Logo,
  subhead: Subhead,
  paragraph: Paragraph,
  body: Body,
  caption: Caption,
  error: Error
};

Typography.defaultProps = {
  variant: "paragraph",
};

Typography.propTypes = {
  children: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
};

export default Typography;

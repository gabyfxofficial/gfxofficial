// src/components/ui/Button.jsx
import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  font-size: 1rem;
  padding: 0.8em 2.5em;
  position: relative;
  font-family: inherit;
  border-radius: 0.75em;
  overflow: hidden;
  transition: all 0.3s;
  line-height: 1.4em;
  border: none;
  color: var(--color-bg);
  background: linear-gradient(
    135deg,
    var(--color-primary-light) 0%,
    var(--color-primary) 100%
  );
  background-size: 200% 100%;
  box-shadow: 0 8px 20px rgba(99, 102, 241, 0.3);

  &:hover {
    background-position: 100% 0;
    box-shadow: 0 10px 25px rgba(99, 102, 241, 0.5);
    transform: translateY(-2px) scale(1.02);
  }

  &:active {
    transform: translateY(0);
  }

  ${(props) =>
    props.$variant === "outline" &&
    `
      background: transparent;
      color: var(--color-primary);
      border: 2px solid var(--color-primary);
      box-shadow: none;
      animation: pulse-slow 2s infinite;
      `}
`;

export default function Button({ children, variant, ...rest }) {
  // pass variant in as a transient prop ($variant),
  // so styled-components sees it but React DOM never does
  return (
    <StyledButton $variant={variant} {...rest}>
      {children}
    </StyledButton>
  );
}

// src/components/ui/Button.jsx
import React from "react";
import styled from "styled-components";

// Redesigned button styles for a modern 2025 look
const StyledButton = styled.button`
  font-size: 1rem;
  padding: 0.75em 2.5em;
  letter-spacing: 0.05em;
  font-family: inherit;
  border-radius: 0.5em;
  border: none;
  color: #fff;
  background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%);
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.15);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 20px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
  }

  ${(props) =>
    props.$variant === "outline" &&
    `
      background: transparent;
      color: var(--color-primary);
      border: 2px solid var(--color-primary);
      box-shadow: none;
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

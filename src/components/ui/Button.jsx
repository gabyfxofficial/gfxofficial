// src/components/ui/Button.jsx
import React from "react";
import styled from "styled-components";

// exactly the same styles & keyframe effects you had before…
const StyledButton = styled.button`
  font-size: 1rem;
  padding: 0.7em 2.7em;
  letter-spacing: 0.06em;
  position: relative;
  font-family: inherit;
  border-radius: 0.6em;
  overflow: hidden;
  transition: all 0.3s;
  line-height: 1.4em;
  border: 2px solid var(--color-primary);
  background: linear-gradient(
    to right,
    #10b9811a 1%,
    transparent 40%,
    transparent 60%,
    #10b9811a 100%
  );
  color: var(--color-primary);
  box-shadow: inset 0 0 10px rgba(16, 185, 129, 0.4),
    0 0 9px 3px rgba(16, 185, 129, 0.1);

  &:hover {
    color: var(--color-primary-light);
    box-shadow: inset 0 0 10px rgba(16, 185, 129, 0.6),
      0 0 9px 3px rgba(16, 185, 129, 0.2);
  }

  &::before {
    content: "";
    position: absolute;
    left: -4em;
    width: 4em;
    height: 100%;
    top: 0;
    transition: transform 0.4s ease-in-out;
    background: linear-gradient(
      to right,
      transparent 1%,
      #10b9811a 40%,
      #10b9811a 60%,
      transparent 100%
    );
  }

  &:hover::before {
    transform: translateX(15em);
  }

  /* …and the exact same outline override, now keyed off $variant */
  ${(props) =>
    props.$variant === "outline" &&
    `
      background: transparent;
      color: var(--color-primary);
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

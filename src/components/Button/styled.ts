import styled from "styled-components";

export const StyledButton = styled.button`
  padding: 0.5em 1em;
  appearance: none;
  font-size: 1rem;
  font-weight: 700;
  border: 2px solid transparent;
  border-radius: ${({ theme }) => theme.borderRadius};
  cursor: pointer;
  transition: 0.2s ease-in-out;

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.palette.primary.contrastText};
    background: ${({ theme }) => theme.palette.primary.tint};
  }

  &:focus {
    outline: none;
    border-color: gold;
  }

  &,
  &:active {
    color: ${({ theme }) => theme.palette.primary.contrastText};
    background: ${({ theme }) => theme.palette.primary.main};
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`;

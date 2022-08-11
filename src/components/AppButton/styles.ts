import styled from "styled-components";

export const StyledButton = styled.button`
  padding: 0.5em 1em;
  appearance: none;
  font-size: 1rem;
  color: #ddd;
  background-color: #333;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  &:hover {
    background-color: #444;
  }
  &:active {
    background-color: #333;
  }
`;

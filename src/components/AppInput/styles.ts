import styled from "styled-components";

interface InputProps {
  size?: string;
}

export const StyledInput = styled.input.attrs<InputProps>(
  (props: InputProps) => ({
    padding: props.size || "1em",
  })
)`
  padding: ${(props) => props.size || "0.5em 0.75em"};
  appearance: none;
  font-size: 1rem;
  color: #ccc;
  background: none;
  border: 2px solid #333;
  border-radius: 0.25rem;
`;

export const StyledInputWrapper = styled.div`
  display: grid;
  gap: 0.5rem;
`;

export const StyledLabel = styled.label`
  font-size: 0.875rem;
`;

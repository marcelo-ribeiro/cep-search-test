import styled from "styled-components";

interface InputProps {
  size?: string;
}

export const StyledInputWrapper = styled.div`
  display: grid;
  gap: 0.5rem;
`;

export const StyledInput = styled.input.attrs<InputProps>(
  (props: InputProps) => ({
    size: props.size || "0.5em 0.75em",
  })
)`
  padding: ${(props) => props.size};
  appearance: none;
  font-size: 1rem;
  color: #fff;
  background: none;
  border: 1px solid #fff4;
  border-radius: 0.25rem;

  &:focus {
    outline: none;
    border-color: gold;
  }

  &:disabled,
  &[readonly] {
    opacity: 0.4;
    cursor: not-allowed;
  }
`;

export const StyledLabel = styled.label`
  font-size: 0.875rem;
`;

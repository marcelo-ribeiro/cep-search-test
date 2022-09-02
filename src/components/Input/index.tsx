import { StyledInput, StyledInputWrapper, StyledLabel } from "./styles";

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
};

export const Input = (props: Props) => {
  return (
    <StyledInputWrapper>
      {!!props.label && (
        <StyledLabel htmlFor={props.id}>{props.label}</StyledLabel>
      )}
      <StyledInput type="text" {...props} />
    </StyledInputWrapper>
  );
};

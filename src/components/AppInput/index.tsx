import { StyledInput, StyledInputWrapper, StyledLabel } from "./styles";

interface AppInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  children?: React.ReactNode;
}

export const AppInput = (props: AppInputProps) => {
  return (
    <StyledInputWrapper>
      {!!props.label && (
        <StyledLabel htmlFor={props.id}>{props.label}</StyledLabel>
      )}
      <StyledInput type="text" {...props} />
    </StyledInputWrapper>
  );
};

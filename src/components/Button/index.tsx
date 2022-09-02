import { StyledButton } from "./styles";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ children, ...props }: ButtonProps) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

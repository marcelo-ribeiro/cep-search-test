import { StyledButton } from "./styles";

interface AppButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

export const AppButton = ({ children, ...props }: AppButtonProps) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

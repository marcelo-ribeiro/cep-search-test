import styled from "styled-components";

type Props = {
  gap?: string;
};

export const Grid = styled.div.attrs((props: Props) => ({
  gap: props.gap ?? "1rem",
}))`
  display: grid;
  gap: ${(props) => props.gap};
`;

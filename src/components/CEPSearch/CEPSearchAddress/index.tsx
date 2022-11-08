import { memo } from "react";
import { StyledCEPSearchAddress } from "./styled";

export interface IAddress {
  cep?: string;
  street?: string;
  neighborhood?: string;
  city?: string;
  state?: string;
}

type CEPSearchAddressProps = {
  address: IAddress;
};

export const CEPSearchAddress = memo(({ address }: CEPSearchAddressProps) => {
  return (
    <StyledCEPSearchAddress>
      <p>
        <strong>CEP:</strong> {address.cep}
      </p>
      <p>
        <strong>Rua:</strong> {address.street}
      </p>
      <p>
        <strong>Cidade:</strong> {address.city}
      </p>
      <p>
        <strong>Estado:</strong> {address.state}
      </p>
    </StyledCEPSearchAddress>
  );
});

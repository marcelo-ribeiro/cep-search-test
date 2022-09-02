import { memo } from "react";
import { StyledCEPSearchAddress } from "./styles";

export interface IAddress {
  cep?: string;
  street?: string;
  neighborhood?: string;
  city?: string;
  state?: string;
}

interface CEPSearchAddressProps {
  address: IAddress;
}

const CEPSearchAddress = (props: CEPSearchAddressProps) => {
  return (
    <StyledCEPSearchAddress>
      <p>
        <strong>CEP:</strong> {props.address.cep}
      </p>
      <p>
        <strong>Rua:</strong> {props.address.street}
      </p>
      <p>
        <strong>Cidade:</strong> {props.address.city}
      </p>
      <p>
        <strong>Estado:</strong> {props.address.state}
      </p>
    </StyledCEPSearchAddress>
  );
};

export default memo(CEPSearchAddress);

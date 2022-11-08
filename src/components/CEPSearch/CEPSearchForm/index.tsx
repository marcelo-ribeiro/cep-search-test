import React, { memo, useState } from "react";
import { fetchCEP } from "../../../utils/fetchCEP";
import { Button } from "../../Button";
import { Input } from "../../Input";
import { IAddress } from "../CEPSearchAddress";
import { StyledCEPSearchForm } from "./styled";

type CEPSearchFormProps = {
  onSuccess?(address: IAddress): void;
  onError?(error: string): void;
};

export const CEPSearchForm = memo((props: CEPSearchFormProps) => {
  const [cep, setCep] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCep(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const address = await fetchCEP(cep);
      setIsLoading(false);
      props.onSuccess?.(address);
    } catch {
      setIsLoading(false);
      props.onError?.("CEP não encontrado");
    }
  };

  return (
    <StyledCEPSearchForm onSubmit={handleSubmit}>
      <Input
        label="Digite o CEP"
        placeholder="40026-010"
        id="cep"
        name="zipcode"
        autoFocus
        autoComplete="postal-code"
        inputMode="numeric"
        maxLength={9}
        minLength={8}
        pattern="\d{5}-?\d{3}"
        value={cep}
        onChange={handleChange}
        required
      />
      <Button type="submit" disabled={isLoading}>
        {isLoading ? "Carregando..." : "Buscar"}
      </Button>
    </StyledCEPSearchForm>
  );
});

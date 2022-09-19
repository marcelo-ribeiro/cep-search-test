import React, { memo, useState } from "react";
import { fetchCEP } from "../../../utils/fetchCEP";
import { Button } from "../../Button";
import { Input } from "../../Input";
import { IAddress } from "../CEPSearchAddress";
import { StyledCEPSearchForm } from "./styles";

type CEPSearchFormProps = {
  onSuccess?: (address: IAddress | null) => void;
  onError?: (error: string | null) => void;
};

const _CEPSearchForm = (props: CEPSearchFormProps) => {
  const [cep, setCep] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCep(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
        label="Digite o CEP:"
        id="cep"
        name="zipcode"
        autoFocus
        autoComplete="postal-code"
        inputMode="numeric"
        maxLength={9}
        minLength={8}
        value={cep}
        onChange={handleChange}
        required
      />
      <Button type="submit" disabled={isLoading}>
        {isLoading ? "Carregando..." : "Buscar"}
      </Button>
    </StyledCEPSearchForm>
  );
};

export const CEPSearchForm = memo(_CEPSearchForm);

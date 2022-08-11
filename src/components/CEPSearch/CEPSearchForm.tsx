import { AppButton } from "components/AppButton";
import { AppInput } from "components/AppInput";
import React, { memo, useState } from "react";
import { fetchCEP } from "utils/fetchCEP";
import { IAddress } from "./CEPSearchAddress";
import { StyledCEPSearchForm } from "./styles";

type CEPSearchFormProps = {
  onSuccess?: (address: IAddress | null) => void;
  onError?: (error: string | null) => void;
};

const CEPSearchForm = (props: CEPSearchFormProps) => {
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
      <AppInput
        label="Digite o CEP"
        id="cep"
        maxLength={8}
        minLength={8}
        value={cep}
        onChange={handleChange}
        required
      />
      <AppButton type="submit" disabled={isLoading}>
        {isLoading ? "Carregando..." : "Buscar"}
      </AppButton>
    </StyledCEPSearchForm>
  );
};

export default memo(CEPSearchForm);

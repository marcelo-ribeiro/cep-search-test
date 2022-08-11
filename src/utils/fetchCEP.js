import { fetcher } from "./fetch";
export const CEP_API_URL = "https://brasilapi.com.br/api/cep/v2";

export const fetchCEP = (cep) => {
  return fetcher(`${CEP_API_URL}/${cep}`);
};

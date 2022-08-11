import { useCallback, useState } from "react";
import CEPSearchAddress, { IAddress } from "./CEPSearchAddress";
import { CEPSearchError } from "./CEPSearchError";
import CEPSearchForm from "./CEPSearchForm";

export function CEPSearch() {
  const [address, setAddress] = useState<IAddress | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSuccess = useCallback((address: IAddress | null) => {
    setAddress(address);
    setError(null);
  }, []);

  const handleError = useCallback((error: string | null) => {
    setAddress(null);
    setError(error);
  }, []);

  return (
    <>
      <CEPSearchForm onSuccess={handleSuccess} onError={handleError} />

      {error && <CEPSearchError error={error} />}

      {address && <CEPSearchAddress address={address} />}
    </>
  );
}

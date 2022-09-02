import { useCallback, useMemo, useState } from "react";
import { Button } from "../Button";
import { Grid } from "../Grid";
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

  const button = useMemo(
    () => (
      <Button
        type="button"
        autoFocus
        onClick={() => {
          setAddress(null);
          setError(null);
        }}
      >
        Nova busca
      </Button>
    ),
    []
  );

  if (error) {
    return (
      <Grid>
        <CEPSearchError error={error} />
        {button}
      </Grid>
    );
  }

  if (address) {
    return (
      <Grid gap="1.5rem">
        <CEPSearchAddress address={address} />
        {button}
      </Grid>
    );
  }

  return <CEPSearchForm onSuccess={handleSuccess} onError={handleError} />;
}

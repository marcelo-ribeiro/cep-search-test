type CEPSearchErrorProps = {
  error: string;
};

export const CEPSearchError = ({ error }: CEPSearchErrorProps) => {
  return <p>{error}</p>;
};

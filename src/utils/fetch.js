export const fetcher = async (input, init) => {
  const response = await fetch(input, init);
  if (!response.ok) throw new Error(response.statusText);
  const data = await response.json();
  return data;
};

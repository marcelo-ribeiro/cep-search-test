import { rest } from "msw";
import { setupServer } from "msw/node";
import { CEP_API_URL } from "../../utils/fetchCEP";

export const fakeAddress = {
  cep: "41820021",
  street: "Avenida Tancredo Neves",
  city: "Salvador",
  state: "BA",
};

export const server = setupServer(
  rest.get(`${CEP_API_URL}/*`, (req, res, ctx) => {
    return res(ctx.json(fakeAddress));
  })
);
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

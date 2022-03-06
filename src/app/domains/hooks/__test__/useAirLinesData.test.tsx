import { render } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";
import HomePage from "app/pages/HomePage";
import * as api from "app/queries";

const data = [
  {
    site: "https://subus.cl/",
    alliance: "subs",
    phone: "",
    name: "SuBús",
    logoURL:
      "/rimg/provider-logos/airlines/v/SUBUS.png?crop=false&width=108&height=92&fallback=default1.png&_v=cf7f153576dad48e814135373e3baf34",
  },
];

const queryClient = new QueryClient();

const renderComponent = () =>
  render(
    <QueryClientProvider client={queryClient}>
      <HomePage />
    </QueryClientProvider>
  );

describe("useAirLinesData", () => {
  it("should getAirLinesData to be called", () => {
    const getAirLinesDataFunc = jest
      .spyOn(api, "getAirLinesData")
      .mockResolvedValue({ data: data });
    renderComponent();
    expect(getAirLinesDataFunc).toHaveBeenCalledTimes(1);
  });
});

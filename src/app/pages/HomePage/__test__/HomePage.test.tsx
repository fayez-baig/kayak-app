import { render } from "@testing-library/react";
import HomePage from "../HomePage";
import { useAirlinesData } from "app/domains/hooks/useAirlinesData";
import { ERROR_MESSAGE, LOADER_TEST_ID } from "utils/constants";

const mockedUseAirLinesData = useAirlinesData as jest.Mock;

jest.mock("app/domains/hooks/useAirlinesData", () => ({
  useAirlinesData: jest.fn(),
}));

describe("<HomePage />", () => {
  beforeEach(() => {
    mockedUseAirLinesData.mockImplementation(() => ({}));
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("Displays loading indicator", () => {
    mockedUseAirLinesData.mockImplementation(() => ({ isLoading: true }));

    const { getByTestId } = render(<HomePage />);
    expect(getByTestId(LOADER_TEST_ID)).toBeTruthy();
  });

  it("Displays data", () => {
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
    mockedUseAirLinesData.mockImplementation(() => ({
      isLoading: false,
      data: { data },
    }));
    const { findByText } = render(<HomePage />);
    expect(findByText(data[0].name)).toBeTruthy();
  });

  it("Displays data with alliance none", () => {
    const data = [
      {
        site: "https://subus.cl/",
        alliance: "none",
        phone: "",
        name: "SuBús",
        logoURL:
          "/rimg/provider-logos/airlines/v/SUBUS.png?crop=false&width=108&height=92&fallback=default1.png&_v=cf7f153576dad48e814135373e3baf34",
      },
    ];
    mockedUseAirLinesData.mockImplementation(() => ({
      isLoading: false,
      data: { data },
    }));
    const { queryByText } = render(<HomePage />);
    expect(queryByText(data[0].alliance)).toBeFalsy();
  });

  it("Displays error message", () => {
    mockedUseAirLinesData.mockImplementation(() => ({
      isLoading: false,
      isError: true,
      error: { message: "Unable to fetch the product data" },
    }));
    const { getByText, queryByTestId } = render(<HomePage />);

    expect(queryByTestId(LOADER_TEST_ID)).toBeFalsy(); // We don't want the loading flag to be displayed
    getByText(ERROR_MESSAGE);
  });
});

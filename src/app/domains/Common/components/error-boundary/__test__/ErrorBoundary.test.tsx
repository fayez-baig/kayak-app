import ErrorBoundary from "../ErrorBoundary";
import { render } from "@testing-library/react";
import { ERROR_BOUNDARY_MESSAGE } from "utils/constants";

describe("<ErrorBoundary>", () => {
  it(`shows the fallback when there's an error`, () => {
    const Throws = () => {
      throw new Error("Oops !");
    };
    const { getByText } = render(
      <ErrorBoundary>
        <Throws />
      </ErrorBoundary>
    );

    expect(getByText(ERROR_BOUNDARY_MESSAGE)).toBeTruthy();
  });
});

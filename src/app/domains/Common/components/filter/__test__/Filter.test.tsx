import { createRenderer } from "react-test-renderer/shallow";
import { render } from "@testing-library/react";
import fireEvent from "@testing-library/user-event";
import Filter from "../Filter";
import { FILTER_TITLE } from "utils/constants";

const renderer = createRenderer();

const props = {
  checkedValues: ["OW"],
  setCheckedValues: jest.fn(),
  setCurrentPage: jest.fn(),
};
describe("<Filter />", () => {
  it("should render and match the snapshot", () => {
    renderer.render(<Filter {...props} />);
    const renderedOutput = renderer.getRenderOutput();
    expect(renderedOutput).toMatchSnapshot();
  });

  it("checkbox should be unchecked", () => {
    const { getByTestId } = render(<Filter {...props} />);
    const input = getByTestId(FILTER_TITLE);
    fireEvent.click(input);
    expect(input).toBeTruthy();
  });

  it("checkbox should be checked", () => {
    props.checkedValues = ["SW"];
    const { getByTestId } = render(<Filter {...props} />);
    const input = getByTestId(FILTER_TITLE);
    fireEvent.click(input);
    expect(input).toBeTruthy();
  });
});

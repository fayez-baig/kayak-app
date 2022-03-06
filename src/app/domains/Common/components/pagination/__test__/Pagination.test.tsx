import { createRenderer } from "react-test-renderer/shallow";
import { render } from "@testing-library/react";
import fireEvent from "@testing-library/user-event";
import Pagination from "../Pagination";
import { NEXT_BUTTON_TEST_ID, PREV_BUTTON_TEST_ID } from "utils/constants";

const renderer = createRenderer();

const props = {
  itemsPerPage: 12,
  totalAirlinesData: 1306,
  paginate: jest.fn(),
  currentPage: 1,
};

describe("<Pagination />", () => {
  it("should render and match the snapshot", () => {
    renderer.render(<Pagination {...props} />);
    const renderedOutput = renderer.getRenderOutput();
    expect(renderedOutput).toMatchSnapshot();
  });

  it("on click next button", () => {
    const { getByTestId } = render(<Pagination {...props} />);
    const btn = getByTestId(NEXT_BUTTON_TEST_ID);
    fireEvent.click(btn);
    expect(props.paginate).toHaveBeenCalled();
  });

  it("on click prev button", () => {
    props.currentPage = props.currentPage + 1;
    const { getByTestId } = render(<Pagination {...props} />);
    const btn = getByTestId(PREV_BUTTON_TEST_ID);
    fireEvent.click(btn);
    expect(props.paginate).toHaveBeenCalled();
  });
});

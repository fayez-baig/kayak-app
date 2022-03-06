import { createRenderer } from "react-test-renderer/shallow";
import CheckBox from "../CheckBox";

const renderer = createRenderer();

const props = {
  onChange: jest.fn(),
  value: "OW",
  label: "Oneworld",
  name: "Oneworld",
  checked: true,
};

describe("<CheckBox />", () => {
  it("should render and match the snapshot", () => {
    renderer.render(<CheckBox {...props} />);
    const renderedOutput = renderer.getRenderOutput();
    expect(renderedOutput).toMatchSnapshot();
  });
});

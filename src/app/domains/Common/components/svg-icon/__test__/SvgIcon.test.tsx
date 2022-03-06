import { createRenderer } from "react-test-renderer/shallow";
import SvgIcon from "../SvgIcon";

const renderer = createRenderer();

describe("<SvgIcon />", () => {
  it("should render and match the snapshot", () => {
    renderer.render(<SvgIcon icon="KayakLogoIcon" />);
    const renderedOutput = renderer.getRenderOutput();
    expect(renderedOutput).toMatchSnapshot();
  });
});

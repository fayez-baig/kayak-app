import { createRenderer } from "react-test-renderer/shallow";

import LayoutContainer from "../LayoutContainer";

const renderer = createRenderer();

describe("<LayoutContainer />", () => {
  it("should render and match the snapshot", () => {
    renderer.render(<LayoutContainer>{() => <div />}</LayoutContainer>);
    const renderedOutput = renderer.getRenderOutput();
    expect(renderedOutput).toMatchSnapshot();
  });
});

import { createRenderer } from "react-test-renderer/shallow";
import Card from "../Card";

const renderer = createRenderer();

const props = {
  website: "https://subus.cl/",
  alliance: "none",
  phone: "",
  title: "SuBús",
  logoUrl:
    "/rimg/provider-logos/airlines/v/SUBUS.png?crop=false&width=108&height=92&fallback=default1.png&_v=cf7f153576dad48e814135373e3baf34",
};

describe("<Card />", () => {
  it("should render and match the snapshot", () => {
    renderer.render(<Card {...props} />);
    const renderedOutput = renderer.getRenderOutput();
    expect(renderedOutput).toMatchSnapshot();
  });
});

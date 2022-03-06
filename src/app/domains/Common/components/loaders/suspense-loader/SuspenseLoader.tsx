import { FC, ReactElement } from "react";
import { LOADER_TEST_ID } from "utils/constants";
import "./style.scss";

const SuspenseLoader: FC = (): ReactElement => (
  <div id="preloader" data-testid={LOADER_TEST_ID}>
    <div id="loader" />
  </div>
);

export default SuspenseLoader;

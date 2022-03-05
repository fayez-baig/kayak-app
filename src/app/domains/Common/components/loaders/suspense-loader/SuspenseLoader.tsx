import { FC, ReactElement } from "react";
import "./style.scss";

const SuspenseLoader: FC = (): ReactElement => (
  <div id="preloader">
    <div id="loader" />
  </div>
);

export default SuspenseLoader;

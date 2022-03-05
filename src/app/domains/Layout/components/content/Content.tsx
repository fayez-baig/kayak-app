import { FC, ReactElement } from "react";
import { ContentProps } from "./types";
import "./content.scss";

const Content: FC<ContentProps> = ({ children }): ReactElement => (
  <main className="container">{children}</main>
);

export default Content;

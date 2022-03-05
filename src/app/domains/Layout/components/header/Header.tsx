import { FC, ReactElement } from "react";
import { SvgIcon } from "app/domains/Common/components/svg-icon";
import "./header.scss";

const Header: FC = (): ReactElement => {
  return (
    <header className="header">
      <SvgIcon icon="KayakLogoIcon" />
    </header>
  );
};

export default Header;

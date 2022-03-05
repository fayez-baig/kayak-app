import { FC, ReactElement } from "react";
import { Content, Header } from "app/domains/Layout/components";
import HomePage from "app/pages/HomePage";

const LayoutContainer: FC = (): ReactElement => {
  return (
    <>
      <Header />
      <Content>
        <HomePage />
      </Content>
    </>
  );
};

export default LayoutContainer;

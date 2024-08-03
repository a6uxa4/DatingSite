import { FC, PropsWithChildren } from "react";
import { Header } from "./header";

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

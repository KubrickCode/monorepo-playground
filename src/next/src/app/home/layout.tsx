import { ReactNode } from "react";

type HomeLayoutProps = {
  children: ReactNode;
};

const HomeLayout = ({ children }: HomeLayoutProps) => (
  <>
    <h2>Home Page</h2>
    {children}
  </>
);

export default HomeLayout;

import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

const DefaulTemplate = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <main className={"flex items-center flex-col mx-auto my-7 w-4/5"}>
        {children}
      </main>
      <Footer />
    </>
  );
};

export default DefaulTemplate;

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
      <main
        className={
          "flex items-center justify-center flex-col mx-auto  w-4/5 h-screen"
        }
      >
        {children}
      </main>
      <Footer />
    </>
  );
};

export default DefaulTemplate;

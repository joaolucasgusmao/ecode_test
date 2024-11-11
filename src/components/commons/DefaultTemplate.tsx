import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { ProfileInfos } from "@/types/HomeInfos";

interface LayoutProps {
  children: ReactNode;
  profile: ProfileInfos;
}

const DefaulTemplate = ({ children, profile }: LayoutProps) => {
  return (
    <>
      <Header profile={profile} />
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

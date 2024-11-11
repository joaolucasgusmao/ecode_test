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
      <Header shareLinks={profile.share_links} />
      <main
        className={
          "flex items-center justify-center flex-col mx-auto mt-12  w-auto"
        }
      >
        {children}
      </main>
      <Footer />
    </>
  );
};

export default DefaulTemplate;

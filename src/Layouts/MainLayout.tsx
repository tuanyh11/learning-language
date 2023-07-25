import React, { FC } from "react";
import Footer from "src/Components/Share/Footer";
import Header from "src/Components/Share/Header";

const MainLayout: FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="container mb-10">{children}</div>
      <Footer />
    </div>
  );
};

export default MainLayout;

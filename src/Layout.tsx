import { Outlet } from "react-router";
import Header from "./sections/Header";
import Footer from "./sections/Footer";

interface LayoutProps {}

let Layout: React.FC<LayoutProps> = () => {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;

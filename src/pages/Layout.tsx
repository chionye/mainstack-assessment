/** @format */

import Header from "@/components/header/header";
import Sidebar from "@/components/sidebar/sidebar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <Sidebar />
      <div className='md:px-32 mt-[144px]'>{children}</div>
    </>
  );
};

export default Layout;

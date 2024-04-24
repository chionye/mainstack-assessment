/** @format */

import Header from "@/components/header";
import FloatingSidebar from "@/components/floating-sidebar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <FloatingSidebar />
      <div className='md:px-32 mt-[144px]'>{children}</div>
    </>
  );
};

export default Layout;

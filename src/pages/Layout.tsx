/** @format */

import Header from "@/components/header";
import FloatingSidebar from "@/components/floating-sidebar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <FloatingSidebar />
      <div className='md:px-32 mt-[144px]'>{children}</div>
    </QueryClientProvider>
  );
};

export default Layout;

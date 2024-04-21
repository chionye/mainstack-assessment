import Header from "@/components/header/header"

const Layout = ({children}:{children: React.ReactNode}) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
}

export default Layout
interface LayoutProps {
  children: React.ReactNode;
}
const Layout = ({ children }: LayoutProps) => {
  return (
    <div 
   
    className="h-full bg-[#000114]">
      <div className="container h-full mx-auto xl:px-22">
        {children}
      </div>
    </div>
  );
};

export default Layout;

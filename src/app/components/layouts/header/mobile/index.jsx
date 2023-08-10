import MenuNav from "./menu";

const HeaderMobile = () => {
  return (
    <header className="lg:hidden">
      <nav className="fixed top-0 z-50 bg-cyan-800 w-full grid grid-cols-3">
        <div>
          <MenuNav />
        </div>
        <div className="flex items-center justify-center col-span-2 py-4">
          <a href="http://localhost:3000">
            <img src="/logo/logo.png" alt="" width={100} height={100} />
          </a>
        </div>
      </nav>
    </header>
  );
};
export default HeaderMobile;

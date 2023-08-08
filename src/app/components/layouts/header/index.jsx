import HeaderMobile from "@/app/components/layouts/header/mobile";
import HeaderDesktop from "@/app/components/layouts/header/desktop";

const Header = () => {
  return (
    <>
      <HeaderDesktop />

      <div className="lg:hidden">
        <HeaderMobile />
      </div>
    </>
  );
};
export default Header;

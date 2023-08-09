import { SiFacebook } from "react-icons/si";

const FooterMobile = () => {
  return (
    <footer className="w-full bg-cyan-600 lg:hidden">
      <hr />
      <div className="grid grid-cols-3 py-4">
        <div className="flex justify-center items-center">
          <SiFacebook size={25} />
        </div>
        <div className="flex justify-center items-center">
          <SiFacebook size={25} />
        </div>
        <div className="flex justify-center items-center">
          <SiFacebook size={25} />
        </div>
      </div>
      <hr />
      <div className="flex flex-col items-center py-4">
        <p>&copy; Tous droits réservés</p>
        <p>2023 - {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
};
export default FooterMobile;

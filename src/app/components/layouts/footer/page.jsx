import Mini from "@/app/mini-img/page";
const Footer = () => {
  return (
    <>
      <footer className="w-full bg-slate-600">
        <div className="text-center">
          <p className="text-4xl">Copyright</p>
        </div>
        <div className="grid grid-cols-2 mx-10 py-5 lg:flex lg justify-center lg:items-center">
          <Mini />
          <Mini />
        </div>
      </footer>
    </>
  );
};
export default Footer;

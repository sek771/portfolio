const FooterMobile = () => {
  return (
    <footer className="flex flex-col w-full bg-cyan-600 lg:hidden">
      <div className="text-center">
        <p className="text-4xl pt-5">Copyright</p>
      </div>
      <div className="grid justify-items-center">
      <div className="py-5">
        <img src="/footer img/linkedin.svg/" alt="linkedin" width="50px" height="50px"/>
      </div>
      <div className="py-5">
        <img src="/footer img/github.svg/" alt="github" width="50px" height="50px"/>
      </div>
      </div>
    </footer>
  );
};
export default FooterMobile;

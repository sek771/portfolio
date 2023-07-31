const FooterDesktop = () => {
  return (
    <footer className="hidden w-full bg-cyan-700 lg:grid lg:grid-rows-2 lg:justify-items-center">
      <div className="text-center">
        <p className="text-4xl">Copyright</p>
      </div>
      <div className="lg:flex ">
        <div className="py-5 px-5">
          <img
            src="/footer img/linkedin.svg/"
            alt="linkedin"
            width="50px"
            height="50px"
          />
        </div>
        <div className="py-5 px-5">
          <img
            src="/footer img/github.svg/"
            alt="github"
            width="50px"
            height="50px"
          />
        </div>
      </div>
    </footer>
  );
};
export default FooterDesktop;

import Image from "next/image";



const FooterMobile = () => {
  return (
    <footer className=" w-full bg-cyan-600 lg:hidden">
      <div className="flex align-baseline">
        <ul>
          <h1 className="uppercase text-xl pl-5">social</h1>
        </ul>
        <div className="py-5 px-5">
          <img
            src="/footer img/linkedin.svg/"
            alt="linkedin"
            width={50}
            height={50}
          />
        </div>
        <div className="py-5 px-5">
          <img
            src="/footer img/github.svg/"
            alt="github"
            width={50}
            height={50}
          />
        </div>
      </div>
      <div>
        <div>
          <ul>
            <h1 className="uppercase pt-5 pl-10 text-xl">sékou sacko</h1>
          </ul>
          <p className="px-5 py-5 mx-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            iusto possimus neque rerum magni quisquam odit impedit nostrum
            corrupti molestias. Ducimus quas natus voluptatibus eaque voluptatem
            modi commodi quaerat rerum.
          </p>
        </div>
      </div>
      <div className="text-center">
        <p>© Copyright 2023. Made by Sékou Sacko</p>
        <p>Tél:(+33) 7 81 66 40 53</p>
      </div>
    </footer>
  );
};
export default FooterMobile;

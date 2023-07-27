const Header = () => {
  return (
    <section className=" px-5 w-full bg-slate-500">
      <div>
        <div className="lg:text-center uppercase ">
          <h2 className="text-3xl lg:text-6xl text-center">
            Bienvenue sur le portfolio de mr sacko
          </h2>
        </div>
        <div className="grid grid-cols-2 justify-items-center mx-10 py-6 lg:grid lg:justify-items-center">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYYL7xdJNiFKKRoigs3neLNWfzEEybBZK5YA&usqp=CAU"
            alt=""
            width={70}
            height={1}
          />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYYL7xdJNiFKKRoigs3neLNWfzEEybBZK5YA&usqp=CAU"
            alt=""
            width={70}
            height={1}
          />
        </div>
      </div>
    </section>
  );
};

export default Header;

const Introduction = () => {
  return (
    <>
      <section className=" px-5 w-full bg-slate-500">
        <div>
          <div className="lg:text-center uppercase ">
            <h2 className="text-3xl lg:text-6xl text-center">
              Bienvenue sur le portfolio de mr sacko
            </h2>
          </div>
          <div className="grid grid-cols-2 mx-10 py-6 lg:flex lg:justify-center lg:px-96">
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
      <section className="lg:grid px-5">
        <div>
          <h2 className="uppercase mt-5 text-center text-4xl ">presentation</h2>
        </div>
        <div className="flex w-full bg-gray-400 pt-5 grid grid-cols-2 ">
          <div className="  lg:text-left">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBIj-Fgl0dW6F4z2Ouzoji7eUj3nGUGGha0Q&usqp=CAU"
              width={500}
              height={500}
              alt="Picture of the author"
            />
          </div>
          <div>
            <p className=" text-2xl">
              Lorem ipsum dolor flt amet consectetur adipisicing elit. amet
              alias perspiciatis totam maxime.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Introduction;

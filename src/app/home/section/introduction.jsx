const Introduction = () => {
  return (
    <>
      
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

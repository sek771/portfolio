const Introduction = () => {
  return (
    <>
      <section className=" grid grid-cols-1 items-center px-5 ">
          <div>
            <h2 className="uppercase mt-5 text-center text-4xl ">
              presentation
            </h2>
          </div>
          <div className="bg-gray-400 pt-5 grid grid-cols-1 justify-items-center">
            <div>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBIj-Fgl0dW6F4z2Ouzoji7eUj3nGUGGha0Q&usqp=CAU"
                width={150}
                height={150}
                alt="Picture of the author"
                className="py-5"
              />
            </div>
            <div>
              <p className=" text-2xl text-center pb-5">
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

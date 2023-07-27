const FooterMobile = () => {
  return (
    <footer className="flex flex-col w-full bg-slate-600 lg:hidden">
      <div className="text-center">
        <p className="text-4xl">Copyright</p>
      </div>
      <div className="grid grid-cols-2 mx-10 py-5 lg:flex lg justify-center lg:items-center">
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
    </footer>
  );
};
export default FooterMobile;

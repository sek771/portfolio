const FooterMobile = () => {
  return (
    <footer className="flex flex-col w-full bg-slate-600 lg:hidden">
      <div className="text-center">
        <p className="text-4xl pt-5">Copyright</p>
      </div>
      <div className="grid justify-items-center">
        <div className="py-5">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYYL7xdJNiFKKRoigs3neLNWfzEEybBZK5YA&usqp=CAU"
            alt=""
            width={70}
            height={1}
          />
        </div>
        <div className="py-5">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYYL7xdJNiFKKRoigs3neLNWfzEEybBZK5YA&usqp=CAU"
            alt=""
            width={70}
            height={1}
          />
        </div>
      </div>
    </footer>
  );
};
export default FooterMobile;

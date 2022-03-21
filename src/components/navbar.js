import { Link } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";

const Navbar = (props) => {
  return (
    <div className="w-screen fixed  dark:bg-slate-800 bg-white border-b-2 dark:border-0 shadow-lg flex items-baseline justify-between p-4 z-10">
      <div className="flex  items-center">
        <Link to="/">
          {" "}
          <div
            className="text-2xl dark:text-white text-zinc-700"
            style={{
              fontFamily: "Lobster",
            }}
          >
            FakeApi Store
          </div>
        </Link>
        <div className="mx-5 h-full dark:text-gray-200  dark:hover:text-blue-400 hover:text-blue-400 cursor-pointer text-xl">
          <Link to="/">Home</Link>
        </div>
        <div className="mx-5 h-full dark:text-gray-200 dark:hover:text-blue-400 hover:text-blue-400 cursor-pointer text-xl">
          <Link to="/categories">Categories</Link>
        </div>
      </div>

      <div className="mx-5 h-full dark:text-gray-200 dark:hover:text-blue-400 hover:text-blue-400 cursor-pointer text-2xl">
        <Link to="/cart">
          <BsCart4 />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

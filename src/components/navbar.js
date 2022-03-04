import { CgDarkMode } from "react-icons/cg";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  const handleClick = () => {
    if (document.documentElement.classList.contains("dark"))
      document.documentElement.classList.remove("dark");
    else document.documentElement.classList.add("dark");
  };

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
      <div>
        <button className="animate-bounce" onClick={handleClick}>
          <CgDarkMode
            className="dark:text-yellow-400 text-blue-800"
            style={{ fontSize: "2rem" }}
          />
        </button>
      </div>
    </div>
  );
};

export default Navbar;

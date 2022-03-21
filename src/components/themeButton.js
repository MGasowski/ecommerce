import { CgDarkMode } from "react-icons/cg";

const ThemeButton = () => {
  const handleClick = () => {
    if (document.documentElement.classList.contains("dark"))
      document.documentElement.classList.remove("dark");
    else document.documentElement.classList.add("dark");
  };
  return (
    <div className="fixed -bottom-5 right-10 bg-gray-900 animate-bounce px-2 py-4 rounded">
      <button onClick={handleClick}>
        <CgDarkMode
          className="dark:text-yellow-400 text-blue-300"
          style={{ fontSize: "2rem" }}
        />
      </button>
    </div>
  );
};

export default ThemeButton;

import axios from "axios";
import { useEffect, useState } from "react";
import Spinner from "./spinner";

const Menu = (props) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);

  const [min, setMin] = useState(30);
  const [max, setMax] = useState(100);

  const handleMin = (e) => {
    e.target.value >= max ? setMin(max) : setMin(e.target.value);
  };

  const handleMax = (e) => {
    e.target.value <= min ? setMax(min) : setMax(e.target.value);
  };

  const handleCategory = (e) => {
    const isSelected = categories.includes(e.target.value);

    isSelected
      ? setCategories(categories.filter((item) => item !== e.target.value))
      : setCategories((current) => [...current, e.target.value]);
  };

  useEffect(() => {
    setLoading(true);
    const getData = async () => {
      await axios
        .get("https://fakestoreapi.com/products/categories")
        .then((response) => setData(response.data));
    };
    getData();
    setLoading(false);
  }, [data]);

  if (loading) return <Spinner />;
  return (
    <div
      className="fixed left-0 top-0 rounded-xl shadow-lg border w-52 bg-white dark:bg-slate-700 dark:border-0 p-2"
      style={{ paddingTop: 80, zIndex: 1 }}
    >
      <p className="text-xl text-center dark:text-gray-200">Filters</p>
      <hr className="m-2 dark:border-slate-900" />
      <div>
        <p className="dark:text-gray-400">Categories:</p>
        <div class="form-check">
          {data.map((el, index) => (
            <div key={index}>
              <input
                class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                type="checkbox"
                value={el}
                id={index}
                key={index}
                onChange={handleCategory}
              />
              <label
                class="form-check-label inline-block text-gray-800 dark:text-sky-400"
                for="flexCheckDefault"
              >
                {el}
              </label>
            </div>
          ))}{" "}
        </div>
      </div>
      <hr className="m-2 dark:border-slate-900" />
      <div className="m-1 ">
        <p className="dark:text-gray-400">Price range:</p>
        <div class="relative pt-1">
          <div className="w-full  flex justify-between">
            <label for="customRange1" class="form-label dark:text-sky-400">
              Min
            </label>
            <span className="text-right dark:text-sky-400">{min * 10}</span>
          </div>
          <input
            type="range"
            id="customRange1"
            value={min}
            onChange={handleMin}
            className="w-full"
          />
        </div>
        <div class="relative pt-1">
          <div className="w-full  flex justify-between">
            <label for="customRange1" class="form-label dark:text-sky-400">
              Max
            </label>
            <span className="text-right dark:text-sky-400"> {max * 10}</span>
          </div>
          <input
            type="range"
            id="customRange1"
            className="w-full"
            value={max}
            onChange={handleMax}
          />
        </div>
      </div>{" "}
      <hr className="m-2 dark:border-slate-900" />
      <button
        onClick={() => props.sort({ categories, min, max })}
        class="w-full bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
      >
        Apply filters
      </button>
    </div>
  );
};

export default Menu;

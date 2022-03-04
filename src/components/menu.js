import axios from "axios";
import { useEffect, useState } from "react";
import Spinner from "./spinner";

const Menu = (props) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const [min, setMin] = useState(30);
  const [max, setMax] = useState(100);

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
            <span className="text-right dark:text-sky-400">
              {" "}
              {(1000 * min) / 100}
            </span>
          </div>
          <input
            type="range"
            id="customRange1"
            value={min}
            onChange={(e) => setMin(e.target.value)}
            className="w-full"
          />
        </div>
        <div class="relative pt-1">
          <div className="w-full  flex justify-between">
            <label for="customRange1" class="form-label dark:text-sky-400">
              Max
            </label>
            <span className="text-right dark:text-sky-400">
              {" "}
              {(1000 * max) / 100}
            </span>
          </div>
          <input
            type="range"
            id="customRange1"
            className="w-full"
            value={max}
            onChange={(e) => setMax(e.target.value)}
          />
        </div>
      </div>{" "}
      <hr className="m-2 dark:border-slate-900" />
      <button class="w-full bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
        Apply filters
      </button>
    </div>
  );
};

export default Menu;

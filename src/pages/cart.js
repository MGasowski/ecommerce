import axios from "axios";
import { useEffect, useState } from "react";
import ProductLI from "../components/productListItem";
import Spinner from "../components/spinner";

const Cart = (props) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [priceSum, setPriceSum] = useState(0);

  useEffect(() => {
    setLoading(true);
    const getData = async () => {
      await axios
        .get(`https://fakestoreapi.com/carts/${Math.floor(Math.random() * 6)}`)
        .then(({ data }) => setData(data));
    };

    getData();
    setLoading(false);
  }, []);

  const addValue = (value) => {};

  if (!products.length === 0) return <Spinner />;

  return (
    <div className="container shadow flex flex-col border rounded-xl bg-white dark:bg-slate-400  dark:border-0">
      <div className="h-10 w-full bg-sky-800 rounded-t-xl text-center text-2xl text-amber-400 ">
        User's cart
      </div>
      <div className="flex justify-center flex-col items-center p-4">
        <ul className="">
          <li className="list-item">
            <div className="flex"></div>
          </li>
        </ul>
        {data &&
          data.products?.map((el) => (
            <ProductLI
              key={el.productId}
              id={el.productId}
              qty={el.quantity}
              add={addValue}
              sum={priceSum}
            />
          ))}
      </div>
      <div className="w-full h-10 bg-slate-400 text-right">{priceSum}</div>
    </div>
  );
};

export default Cart;

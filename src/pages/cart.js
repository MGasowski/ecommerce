import axios from "axios";
import { useEffect, useState } from "react";
import Spinner from "../components/spinner";

const Cart = (props) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

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

  useEffect(() => {
    data &&
      data.products?.forEach((el) => {
        axios
          .get(`https://fakestoreapi.com/products/${el.productId}`)
          .then((result) =>
            setProducts((current) => ({ ...current, ...result.data }))
          );
      });
  }, [data]);

  return (
    <div className="container shadow flex flex-col border rounded-xl bg-white dark:bg-slate-400  dark:border-0">
      <div className="h-10 w-full bg-sky-800 rounded-t-xl text-center text-2xl text-amber-400 ">
        User's cart{console.log(products)}
      </div>
      <div className="flex justify-center flex-col items-center p-4">
        <ul className="">
          <li className="list-item">
            <div className="flex">
              <img /> <p>name</p>
            </div>
          </li>
        </ul>
        {data ? (
          data.products?.map((el) => <li key={el.productId}>{el.productId}</li>)
        ) : (
          <Spinner />
        )}
      </div>
    </div>
  );
};

export default Cart;

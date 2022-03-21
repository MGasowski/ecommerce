import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Spinner from "./spinner";

const ProductLI = (props) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState();

  useEffect(() => {
    setLoading(true);
    const getData = async () => {
      await axios
        .get(`https://fakestoreapi.com/products/${props.id}`)
        .then(({ data }) => setData(data));
    };

    getData();
    setLoading(false);
  }, [props.id]);

  useEffect(() => {
    if (!data) return;
    const val = {
      id: data.id,
      value: data.price * props.qty,
    };

    props.add(val);
  }, [data, props]);

  if (loading || !data) return <Spinner />;
  return (
    <Link to={`/products/${props.id}`} className="w-full">
      <div className="flex h-10  w-full m-1 justify-between">
        <div className="">
          <img src={data.image} alt={data.title} className="h-full" />
        </div>

        <div className=" flex-1">
          <div className="mx-2 text-center">
            {props.qty} x <span>{data.title}</span>
          </div>
        </div>

        <div className="">
          {props.qty === 1 ? (
            <p>${data.price}</p>
          ) : (
            <p>
              ${data.price} x {props.qty} = ${data.price * props.qty}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProductLI;

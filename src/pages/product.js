import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Rating from "../components/rating";
import Spinner from "../components/spinner";

const Product = (props) => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    const getData = async () => {
      await axios
        .get(`https://fakestoreapi.com/products/${id}`)
        .then((response) => setData(response.data));
    };
    getData();
    setLoading(false);
  }, [id]);

  if (loading) return <Spinner />;
  if (!data.title) return <Spinner />;
  return (
    <div className="container  w-full  flex mt-5">
      <div className="w-1/3 mr-4">
        <img alt="item" src={data.image} />
      </div>
      <div className="w-2/3">
        <div className="flex flex-col justify-around h-full">
          <p className="text-6xl bold text-center  mb-6 text-teal-800">
            {data.title}
          </p>
          <p className="text-justify p-3">{data.description}</p>
          <div className="self-end">
            <span>Rating: </span>
            <Rating rate={data.rating.rate} count={data.rating.count} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;

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
    <div className="container border w-full  flex">
      <div className="w-1/3 border">
        {" "}
        <img alt="item" src={data.image} />
      </div>
      <div className="w-2/3">
        <div className="flex flex-col">
          <p className="text-4xl">{data.title}</p>
          <p>{data.description}</p>
          <div>
            <Rating rate={data.rating.rate} count={data.rating.count} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;

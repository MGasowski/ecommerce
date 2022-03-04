import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../components/card";
import Spinner from "../components/spinner";

const Category = (props) => {
  const { id } = useParams();
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    const getData = async () => {
      await axios
        .get(`https://fakestoreapi.com/products/category/${id}`)
        .then((response) => setData(response.data));
    };
    getData();
    setLoading(false);
  }, [id]);

  if (loading || !data) return <Spinner />;

  return (
    <div className="container">
      <p className="text-5xl text-center mb-4">Products in category - {id}</p>
      <hr />
      <div className="flex flex-wrap justify-evenly mt-4">
        {data.map((el) => (
          <Card {...el} key={el.id} />
        ))}
      </div>
    </div>
  );
};

export default Category;

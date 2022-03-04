import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CategoryCard from "../components/categoryCard";
import Spinner from "../components/spinner";

const Categories = (props) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

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

  if (loading || !data) return <Spinner />;
  return (
    <div className="container">
      {data.map((el, index) => (
        <Link to={`/categories/${el}`} key={index}>
          <CategoryCard title={el} />
        </Link>
      ))}
    </div>
  );
};

export default Categories;

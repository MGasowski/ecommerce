import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Card from "../components/card";
import Menu from "../components/menu";
import Spinner from "../components/spinner";
import { FilterContext } from "../FilterContext";

const Home = (props) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { filters } = useContext(FilterContext);
  useEffect(() => {
    setLoading(true);
    const getData = async () => {
      await axios
        .get("https://fakestoreapi.com/products")
        .then((response) => setData(response.data));
    };
    getData();
    setLoading(false);
  }, []);

  if (loading) return <Spinner />;
  return (
    <div
      className=" flex flex-wrap justify-center "
      style={{ paddingLeft: "12rem" }}
    >
      <Menu />
      {data
        .filter((el) =>
          filters.categories.length > 0
            ? filters.categories.includes(el.category)
            : true
        )
        .filter(
          (el) => el.price >= filters.price.min && el.price <= filters.price.max
        )
        .map((el) => {
          console.log(el);
          return <Card key={el.id} {...el} />;
        })}
    </div>
  );
};

export default Home;

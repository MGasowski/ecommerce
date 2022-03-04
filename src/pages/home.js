import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../components/card";
import Menu from "../components/menu";
import Spinner from "../components/spinner";

const Home = (props) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sort, setSort] = useState();

  useEffect(() => {
    setLoading(true);
    const getData = async () => {
      await axios
        .get("https://fakestoreapi.com/products")
        .then((response) => setData(response.data));
    };
    getData();
    setLoading(false);
  }, [data]);

  if (loading) return <Spinner />;
  return (
    <div
      className=" flex flex-wrap justify-center "
      style={{ paddingLeft: "12rem" }}
    >
      <Menu sort={setSort} />
      {data.map((el) => (
        <Card key={el.id} {...el} />
      ))}
    </div>
  );
};

export default Home;

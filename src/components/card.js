import { Link } from "react-router-dom";
import Rating from "./rating";

const Card = (props) => {
  return (
    <div className="max-w-xs h-min rounded overflow-hidden hover:shadow-2xl shadow-lg m-1 flex flex-col justify-evenly dark:bg-slate-500">
      <div>
        <Link to={`/products/${props.id}`}>
          <img
            className="w-full"
            src={props.image}
            alt="Sunset in the mountains"
          />
        </Link>
      </div>
      <div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {props.category}
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #travel
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #winter
          </span>
        </div>
        <div className="px-6 py-4">
          <Link to={`/products/${props.id}`}>
            <div className="font-bold text-xl mb-2">{props.title}</div>
          </Link>
          <p className="text-gray-700 dark:text-white text-base truncate">
            {props.description}
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block text-gray-600 dark:text-sky-400  px-3 py-1 text-4xl font-semibold mr-2 mb-2">
            {props.price}$
          </span>
          <span className="inline-block text-gray-600  px-3 py-1 text-xl font-semibold mr-2 mb-2">
            <Rating rate={props.rating.rate} count={props.rating.count} />{" "}
          </span>
        </div>
        <div className="flex justify-center">
          <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Buy now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;

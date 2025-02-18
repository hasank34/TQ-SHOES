import { Link } from "react-router-dom";
import { Shoe } from "../../types";
import Badge from "./Badge";
import Price from "./Price";

type Props = {
  item: Shoe;
};
const Card = ({ item }: Props) => {
  return (
    <div className="flex flex-col justify-between">
      <div>
        <div className="bg-white p-2 relative rounded-3xl">
          <Badge item={item} />
          <img src={item.picture[0]} className="aspect-[9/10] rounded-3xl" />
        </div>

        <h2 className="font-bold line-clamp-2 my-4 lg:text-xl xl:text-2xl">
          {item.name}
        </h2>
      </div>

      <Link
        to={`/detail/${item.id}`}
        className="bg-gray-dark text-white font-medium px-4 py-2 rounded-lg transition hover:bg-black text-center flex items-center justify-center gap-1"
      >
        Ürünü Görüntüle - <Price item={item} />
      </Link>
    </div>
  );
};

export default Card;

import Badge from "../../components/list/Badge";
import { DetailProps } from "../../types";

const Head = ({ data }: DetailProps) => {
  let price = data.price;
  if (data.discount) {
    price = (price * (100 - data.discount)) / 100;
  }

  return (
    <div>
      <Badge item={data} />
      <h1 className="font-semibold text-2xl md:text-[28px] lg:text-[32px] mt-14">
        {data.name}
      </h1>

      <p className="text-xl md:text-2xl mt-4">
        <span className="text-blue">$ {price}</span>
        {data.discount && (
          <span className="line-through ps-3 text-xl">$ {data.price}</span>
        )}
      </p>
    </div>
  );
};

export default Head;

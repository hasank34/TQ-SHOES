import { Shoe } from "../../types";

const Badge = ({ item }: { item: Shoe }) => {
  return (
    (item.discount || item.isNew) && (
      <span
        className={`absolute text-white rounded rounded-tl-xl rounded-br-xl lg:rounded-tl-3xl lg:rounded-br-3xl px-2 py-1 lg:px-4 lg:py-3 ${
          item.discount ? "bg-yellow" : "bg-blue"
        }`}
      >
        {item.discount ? `% ${item.discount} indirim` : item.isNew && "Yeni"}
      </span>
    )
  );
};

export default Badge;

import { FilterProps } from "../../types";
import { colors } from "../../utils/constants";

const Color = ({ setSelected, selected }: FilterProps<string[]>) => {
  // üzerine tıklanan seçeneği state'e yoksa ekleyen varsa kaldıran
  const toggle = (num: string) => {
    const found = selected.includes(num);
    if (!found) {
      setSelected([...selected, num]);
    } else {
      setSelected(selected.filter((item) => item !== num));
    }
  };
  // console.log(selected);
  return (
    <div className="lg:mt-5">
      <h2 className="mb-2 font-semibold">Renk</h2>
      <div className="grid grid-cols-5 gap-4">
        {colors.map((color) => {
          const found = selected.includes(color.id);

          return (
            <button
              type="button"
              style={{ backgroundColor: color.code }}
              onClick={() => toggle(color.id)}
              className={`py-2 lg:px-0 text-center rounded-md cursor-pointer transition hover:bg-zinc-400 text-transparent select-none ${
                found ? "ring-[4px]" : ""
              }`}
            >
              .
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Color;

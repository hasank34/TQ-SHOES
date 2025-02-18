import { useState } from "react";
import { DetailProps } from "../../types";
import { colors } from "../../utils/constants";

const Color = ({ data }: DetailProps) => {
  //
  const [selected, setSelected] = useState<string>("");
  // üzerine tıklanan seçenek state'de yoksa ekle varsa kaldır
  const toggle = (id: string) => {
    // zaten seçili olanı mı tıklandı ?
    const isSame = selected === id;

    if (isSame) {
      setSelected("");
    } else {
      setSelected(id);
    }
  };
  return (
    <div>
      <h2 className="font-semibold mb-3">Renk Seçiniz</h2>

      <div className="flex gap-5">
        {data.color.split(",").map((id) => {
          // ekrana basılan rengin kodunu bul
          const color = colors.find((i) => i.id === id);
          // ekrana basılan renk seçili mi ?
          const isSelected = selected == id;
          return (
            <div className={isSelected ? " ring ring-blue rounded-full" : ""}>
              <div
                onClick={() => toggle(id)}
                key={id}
                style={{ background: color?.code }}
                className="size-8 rounded-full cursor-pointer m-1"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Color;

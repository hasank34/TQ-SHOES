import { FilterProps } from "../../types";

const Price = ({ selected, setSelected }: FilterProps<string>) => {
  return (
    <div>
      <h2 className="mb-2 font-semibold">Fiyat</h2>
      <input
        onChange={(e) => setSelected(e.target.value)}
        type="range"
        className="w-full"
        min={0}
        max={1000}
        value={selected}
      />
      <div className="flex justify-between font-open font-semibold">
        <span>0</span>
        <span>${selected}</span>
        <span>1000</span>
      </div>
    </div>
  );
};

export default Price;

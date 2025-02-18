import { FilterProps } from "../../types";

const Gender = ({ selected, setSelected }: FilterProps<string>) => {
  // console.log(selected);
  return (
    <div>
      <h2 className="mb-2 font-semibold">Cinsiyet</h2>

      <div className="flex items-center gap-3">
        <input
          onClick={() => setSelected("men")}
          type="radio"
          name="gender"
          checked={selected === "men"}
          id="men"
        />
        <label htmlFor="men" className="font-semibold">
          Erkek
        </label>
      </div>

      <div className="flex items-center gap-3">
        <input
          onClick={() => setSelected("women")}
          checked={selected === "women"}
          type="radio"
          name="gender"
          id="women"
        />
        <label htmlFor="women" className="font-semibold">
          Kadın
        </label>
      </div>
    </div>
  );
};

export default Gender;

import { useState } from "react";
import Buttons from "../../components/buttons";
import Filter from "../../components/filter";
import Hero from "../../components/hero";
import List from "../../components/list";

const Home = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div>
      <Hero />

      <Buttons open={() => setIsOpen(true)} />

      <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold mb-4 md:mt-7 xl:mt-8">
        Sana Uygun Seçenekler
      </h1>

      <div className="grid grid-cols-4 gap-5">
        <div className={isOpen ? "block" : "max-lg:hidden"}>
          <Filter close={() => setIsOpen(false)} />
        </div>
        <div className="lg:col-span-3 col-span-4 ">
          <List />
        </div>
      </div>
    </div>
  );
};

export default Home;

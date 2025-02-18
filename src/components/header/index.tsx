import { Link } from "react-router-dom";

const Header = (): JSX.Element => {
  return (
    <header className="grid grid-cols-3 items-center bg-white-fa  p-4 md:p-5 lg:p-5 xl:p-6 text-gray-dark rounded-xl md:rounded-2xl lg:rounded-[20px] xl:rounded-3xl mb-6 md:mb-10 lg:mb-14 xl:mb-20">
      <nav className="flex gap-10 font-semibold max-lg:hidden">
        <a>New Drops 🔥</a>
        <a>Men</a>
        <a>Women</a>
      </nav>

      <button className="lg:hidden">
        <img src="/hamburger.svg" />
      </button>

      <Link to="/" className="flex justify-center">
        <img src="/logo.svg" />
      </Link>

      <div className="flex items-center gap-5 lg:gap-10 justify-end">
        <img src="/user.svg" className="size-4 md:size-5 lg:size-6 xl:size-7" />
        <img src="/search.svg" className="max-lg:hidden lg:size-6 xl:size-7" />
        <span className="size-6 md:size-8 lg:size-10 md:text-lg bg-yellow rounded-full grid place-items-center font-open font-semibold">
          0
        </span>
      </div>
    </header>
  );
};

export default Header;

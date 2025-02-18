const Hero = () => {
  return (
    <div className="relative">
      <div className="absolute top-1/2  transform -translate-y-1/2 ps-4 md:ps-6 lg:ps-8 xl:ps-10 ">
        <p className="text-xs sm:text-base lg:text-xl xl:text-2xl font-open xl:font-semibold text-gray">
          Sadece geçerli süreyle
        </p>
        <h1 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-7xl">
          %30 indirim
        </h1>
        <p className="text-gray text-xs sm:text-base lg:text-xl xl:text-2xl max-w-[60%]">
          Rahatınız düşünülerek tasarlanan spor ayakkabılar, bir sonraki
          seansınıza tüm odağınızı verebilmenizi sağlar.
        </p>
      </div>

      <img src="/banner.png" />
    </div>
  );
};

export default Hero;

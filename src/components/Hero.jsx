const Hero = () => {
  return (
    <section className="pb-16 pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center md:pb-6">
        <div className="text-center">
          <h1 className="text-5xl font-extrabold text-gray-900 sm:text-6xl md:text-6xl lg:text-8xl dark:text-gray-100 animate-slidein300 opacity-0 leading-normal max-w-80 md:max-w-none pr-5 md:pr-0">
            شغل
            <span className="mx-2 md:mx-4 font-extrabold text-5xl relative inline-block stroke-current sm:text-6xl md:text-6xl lg:text-8xl text-purple-500">
              رویاییت
              <svg
                className="absolute -bottom-4 w-full max-h-5"
                viewBox="0 0 55 5"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
              >
                <path
                  d="M0.652466 4.00002C15.8925 2.66668 48.0351 0.400018 54.6853 2.00002"
                  strokeWidth="2"
                ></path>
              </svg>
            </span>
            رو پیدا کن!
          </h1>
          <p className="pt-5 md:pt-10 text-xl text-gray-900 dark:text-gray-300 animate-slidein500 opacity-0 drop-shadow-lg dark:drop-shadow-lg">
            سامانه کاریابی آنلاین با بیشترین تعداد آگهی استخدام در ایران
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;

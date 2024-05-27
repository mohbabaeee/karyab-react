import { FaGithub, FaLinkedin, FaTelegramPlane } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="flex flex-col bg-green-700 max-w text-white text-4xl">
      <span className="w-full h-3 bg-gradient-to-r from-lime-400 via-emerald-500 to-teal-700"></span>
      <div className="flex flex-col md:flex-row gap-5 md:gap-20 my-10 items-center justify-center">
        <div>
          <p className="text-gray-300 pb-1 text-xl">طراحی و پیاده‌سازی:</p>
          <h2 className="text-2xl font-bold">محمدحسین بابایی</h2>
        </div>
        <div className="flex flex-row gap-10">
          <a
            href="https://github.com/tinykocholo"
            type="button"
            target="_blank"
          >
            <FaGithub />
          </a>
          <a href="https://t.me/+989384794953" type="button" target="_blank">
            <FaTelegramPlane />
          </a>
          <a
            href="https://www.linkedin.com/in/mohamad-babaee-a28293299/"
            type="button"
            target="_blank"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
    // <footer className="w-full flex justify-center bg-green-700 text-white p-5 ">
    //   <h1 className="text-3xl font-bold m-4 text-white">
    //     طراحی و پیاده‌سازی:{" "}
    //     <a
    //       href="https://t.me/+989384794953"
    //       target="_blank"
    //       className="bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 bg-[length:100%_4px] bg-no-repeat bg-bottom"
    //     >
    //       محمدحسین بابایی
    //     </a>
    //   </h1>
    // </footer>
  );
};

export default Footer;

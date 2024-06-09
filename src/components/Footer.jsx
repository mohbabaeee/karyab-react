import { FaGithub, FaLinkedin, FaTelegramPlane } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="flex flex-col max-w text-gray-900 text-4xl border-t dark:bg-gray-900 dark:border-gray-500 bg-white mt-auto">
      <div className="flex flex-col md:flex-row gap-5 md:gap-20 mt-6 pb-8 items-center justify-center dark:text-gray-300">
        <div>
          <p className="text-gray-700 pb-2 text-xl dark:text-gray-300">
            طراحی و پیاده‌سازی:
          </p>
          <h2 className="text-3xl font-bold mr-10 animate-text bg-gradient-to-r from-slate-950 via-violet-950 to-cyan-400 bg-clip-text text-transparent dark:from-white dark:via-pink-300 dark:to-blue-300">
            محمدحسین بابایی
          </h2>
        </div>
        <div className="flex flex-row gap-8">
          <a
            href="https://github.com/tinykocholo"
            type="button"
            target="_blank"
            className="p-2 rounded-xl dark:hover:bg-gray-800 hover:bg-gray-100"
          >
            <FaGithub />
          </a>
          <a
            href="https://t.me/+989384794953"
            type="button"
            target="_blank"
            className="p-2 rounded-xl dark:hover:bg-gray-800 hover:bg-gray-100"
          >
            <FaTelegramPlane />
          </a>
          <a
            href="https://www.linkedin.com/in/mohamad-babaee-a28293299/"
            type="button"
            target="_blank"
            className="p-2 rounded-xl dark:hover:bg-gray-800 hover:bg-gray-100"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

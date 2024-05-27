import { Link } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa";

const NotFoundPage = () => {
  return (
    <section className="text-center flex flex-col justify-center items-center h-screen">
      <FaExclamationTriangle className="text-yellow-400 text-6xl mb-4" />
      <h1 className="text-7xl font-bold mb-4">۴۰۴</h1>
      <p className="text-xl mb-5 px-10">
        متاسفانه صفحه مورد نظر شما یافت نشد. این صفحه ممکن است حذف و یا جابجا
        شده باشد.
      </p>
      <Link
        to="/"
        className="text-white bg-green-700 hover:bg-green-900 rounded-md px-3 py-2 mt-4"
      >
        برگشتن
      </Link>
    </section>
  );
};

export default NotFoundPage;

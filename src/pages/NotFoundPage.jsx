import { Link } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa";

const NotFoundPage = () => {
  return (
    <section className="text-center flex flex-col justify-center items-center h-screen dark:bg-gray-900 dark:text-white">
      <FaExclamationTriangle className="text-purple-500 text-6xl mb-4" />
      <h1 className="text-7xl font-bold mb-4">۴۰۴</h1>
      <p className="text-xl mb-5 px-10">
        متاسفانه صفحه مورد نظر شما یافت نشد. این صفحه ممکن است حذف و یا جابجا
        شده باشد.
      </p>
      <Link
        to="/"
        className="text-gray-900 rounded-lg hover:bg-gray-100 border bg-white dark:bg-gray-900 dark:text-gray-300 dark:hover:text-gray-100 dark:hover:bg-gray-600 dark:border-gray-500 px-3 py-2 mt-4"
      >
        برگشتن
      </Link>
    </section>
  );
};

export default NotFoundPage;
